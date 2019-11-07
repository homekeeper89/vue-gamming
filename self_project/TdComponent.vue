<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
export default{
  props:{
    cellData:String,
    cellIndex:Number,
    rowIndex:Number,
  },
  methods:{
    onClickTd(){ // vue에서 리스트의 내부 값을 바꾼다고 화면에 반영되는 것은 아니다.
      // 자바스크립트의 내부적 한계
      // 단 push 등을 통해서 바꾸는 것은 가능, 인덱스로 하는건 불가
      // Vue.set(객체, 인덱스, 바꾸려는 값) 으로 가능함
      // = this.$set(이하 동일) 
      // this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
      if(this.cellData) return;
      const rootData = this.$root.$data
      this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn)
      let win = false;
      if (rootData.tableData[this.rowIndex][0] === rootData.turn && rootData.tableData[this.rowIndex][1] === rootData.turn && rootData.tableData[this.rowIndex][2] === rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][this.cellIndex] === rootData.turn && rootData.tableData[1][this.cellIndex] === rootData.turn && rootData.tableData[2][this.cellIndex] === rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][2] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][0] === rootData.turn) {
        win = true;
      }
      if(win){
        rootData.winner = rootData.turn;
        rootData.turn = 'O'
        rootData.tableData = [['','',''],['','',''], ['','','']]
      }else{
        let all = true; // all이 true면 무승부라는 뜻
        rootData.tableData.forEach((row) => { // 무승부 검사
          row.forEach((cell) => {
            if (!cell) {
              all = false;
            }
          })
          });
        if(all){
          rootData.winner='';
          rootData.turn = 'O'
          rootData.tableData = [['','',''],['','',''], ['','','']]
        }else{
          rootData.turn = rootData.turn ==='O' ? 'X' : 'O' 
        }
      }
    }
  }
}
</script>