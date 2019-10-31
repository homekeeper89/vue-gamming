<template>
  <div>
    <h1>result</h1>
    <input v-model="value">
    <form v-on:submit="onSubmit"></form>
    <button>입력</button>
    <div> 시도 {{}}</div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        value:'',
        result:''
      }
    },
    methods:{
      onSubmit(e){
        e.preventDefault();
      }
    }
  }
</script>
<style>

</style>