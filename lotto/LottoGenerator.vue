<template>
  <div>
    <div>당첨숫자</div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" :key="ball" number="5"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus"></lotto-ball>
    <button v-if='redo'>한번더</button>
  </div>
</template>
<script>
  import LottoBall from './LottoBall';
  const getWinNumbers = () =>{
    const candidate = Array(45).fill().map((v,i) => i+1)
    const shuffle = [];
    while(candiate.length > 0){
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
    }
    const bonusNumber = shuffle[shuffle.length -1];
    const winNumbers = shuffle.slice(0, 6).sort((p,c)=> p-c);
    return [...winNumbers, bonusNumber]
  }
  export default{
    components:{
      'lotto-ball':LottoBall
    },
    data(){
      return{
        winNumbers:getWinNumbers(), // 처음엔 다 뽑아놓고 나중에 하나하나 추가
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