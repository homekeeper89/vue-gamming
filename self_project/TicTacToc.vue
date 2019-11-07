<template>
  <div>
    <table-component :table-data="tableData"></table-component>
    <div v-if='winner'> {{winner}}님의 승리입니다. </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import TableComponent from './TableComponent'
  export default{
    components:{
      TableComponent
    },
    data(){
      return{
        tableData:[
          ['','',''],
          ['','',''],
          ['','',''],
        ],
        turn:'O',
        winner:false
      }
    },
    methods:{
      
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