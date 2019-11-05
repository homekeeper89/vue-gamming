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
      const rootData = this.$root.$data
      this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn)
      rootData.turn = rootData.turn ==='O' ? 'X' : 'O'
    }
  }
}
</script>