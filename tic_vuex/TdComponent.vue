<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
import {CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER} from './store'
export default{
  props:{
    cellData:String,
    cellIndex:Number,
    rowIndex:Number,
  },
  computed:{ // vuex 사용할려면 반듯이 computed에 연결해줘야한다
    tableData(){
      return this.$store.state.tableData;
    }, 
    turn(){
      return this.$store.state.turn
    }
  },
  methods:{
    onClickTd(){
      if(this.cellData) return;
      this.$store.commit(CLICK_CELL, {row:this.rowIndex, cell:this.cellIndex});  // click_cell 부분이 실행됨, 변수명 오타는 브라우져에서 바로 잡아주기때문에 좋다.
      const rootData = this.$root.$data
      let win = false;
      if (tableData[this.rowIndex][0] === turn && tableData[this.rowIndex][1] === turn && tableData[this.rowIndex][2] === turn) {
        win = true;
      }
      if (tableData[0][this.cellIndex] === turn && tableData[1][this.cellIndex] === turn && tableData[2][this.cellIndex] === turn) {
        win = true;
      }
      if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
        win = true;
      }
      if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
        win = true;
      }
      if(win){
        this.$store.commit(SET_WINNER, this.turn)
        this.$store.commit(RESET_GAME)
      }else{
        let all = true; // all이 true면 무승부라는 뜻
        tableData.forEach((row) => { // 무승부 검사
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
  }
}
</script>