<template>
  <div>
    <div>당첨숫자</div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" :key="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus"></lotto-ball>
    <button v-if='redo'>한번더</button>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        redo:false,
        winBalls:[],
        bonus:null,
      }
    },
    computed:{

    },
    methods:{

    },
    mounted(){

    },
    watch:{

    }
  }
</script>
<style scoped>

</style>