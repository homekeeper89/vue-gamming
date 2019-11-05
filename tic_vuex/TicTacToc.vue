<template>
  <div>
    <table-component :table-data="tableData"></table-component>
    <div v-if='winner'> {{winner}}님의 승리입니다. </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import store from './store'
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
      winner(){
        return this.$store.state.winner
      },
      turn(){
        return this.$store.state.turn
      },
      tableData(){
        return this.$store.state.tableData
      }
    },
    methods:{
      
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