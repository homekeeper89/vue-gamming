<template>
  <div>
    <div>{{turn}}님의 턴 입니다</div>
    <!-- <table-component :table-data="tableData"></table-component> -->
    <!-- 슬롯을 왜쓰는가? 아래 tag는 해당 컴포넌트의 slot에 있는것과 마찬가지
      하지만 작성한 곳은 root이다. 이럴 경우 root data에 바로 접근이 가능 > 아래 컴포넌트 데이터에 접근할 필요없이
      자식 컴포넌트 내용을 부모에 적어줌으로서 부모 데이터에 접근할 수 있다. 
      inversion of control
        > tr,td 컨트롤이 table-componet 였는데 반대로 지금은 부모에게서 하고 있다
        > 제어의 역전
    -->
    <table-component> <!--slot 사용법: 컴포넌트 사이에 태그를 넣어준다 -->
      <!-- 반복문에서 key를 인덱스로 사용하면 안좋다
        써도 되는 경우 : 배열이 계속 증가 하는 경우(인덱스는 바뀌지 않는다)
        [0,1,2,3,4,5] index : 0,1,2,3,4,5
        만약 중간에 있는 애들이 지워진다면?
          [0,1,2,4,5] index : 0,1,2,3,4,5
        > 지워진 애 뒤로 전부 다 그려버린다.
        리스트 요소가 사라진다면 쓰면 좀 그렇다..
        rowIndex + '문자'... 좀 애매한 문제임
        Math.random
      -->
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
      </tr>
    </table-component>
    <!-- <table>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
      </tr>
    </table> -->
    <div v-if='winner'> {{winner}}님의 승리입니다. </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {mapState} from 'vuex';
  import store, {CLICK_CELL,SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER} from './store'
  import TableComponent from './TableComponent'
  export default{
    store,
    components:{
      TableComponent
    },
    data(){
      return{
        
      }
    },
    computed:{
      ...mapState({
      winner:state => state.winner,
      tableData:state => state.tableData,
      turn : state => state.turn,
      // cellData(state){
      //   return state.tableData[rowIndex][cellIndex]
      // }
      })
      // ...mapState({
      //   winner: state => state.winner,
      //   winner(state){ // arrow 함수는 this를 사용 못한다. 공식문서 참조하셈
      //     return state.winner + this.data
      //   },
      //   turnState:'turn'
      // })
      // winner(){
      //   return this.$store.state.winner
      // },
      // turn(){
      //   return this.$store.state.turn
      // },
      // tableData(){
      //   return this.$store.state.tableData
      // }
    },
    methods:{
      onClickTd(rowIndex, cellIndex){
        if(this.cellData) return
        this.$store.commit(CLICK_CELL, {row:rowIndex, cell:cellIndex});  // click_cell 부분이 실행됨, 변수명 오타는 브라우져에서 바로 잡아주기때문에 좋다.
        const rootData = this.$root.$data
        let win = false;
        if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
          win = true;
        }
        if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
          win = true;
        }
        if(win){
          this.$store.commit(SET_WINNER, this.turn)
          this.$store.commit(RESET_GAME)
        }else{
          let all = true; // all이 true면 무승부라는 뜻
          this.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false;
              }
            })
            });
          if(all){
            this.$store.commit(NO_WINNER)
            this.$store.commit(RESET_GAME)
          }else{
            this.$store.commit(CHANGE_TURN)
          }
      }
    }
    },
    created(){
    }
  }
</script>
<style>
  table{
    border-collapse:collapse;
  }
  td{
    border:1px solid black;
    width:40px;
    height:40px;
    text-align:center;
  }
</style>