<template>
  <div>
    <div>당첨숫자</div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if='redo' @click="onClickRedo">한번더</button>
  </div>
</template>
<script>
  import LottoBall from './LottoBall';
  const timeOuts = [];
  function getWinNumbers(){
    const candidate = Array(45).fill().map((v,i) => i+1)
    const shuffle = [];
    while(candidate.length > 0){
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
      onClickRedo(){
        this.winNumbers = getWinNumbers();
        this.winBalls = [];
        this.bonus = null;
        this.redo = false;
      },
      showBalls(){
        for(let i =0; i<this.winNumbers.length-1; i++){
        timeOuts[i] = setTimeout(()=>{
          this.winBalls.push(this.winNumbers[i])
        }, (i+1) * 1000)
      }
      timeOuts[6] = setTimeout(()=>{
        this.bonus = this.winNumbers[6];
        this.redo = true
      }, 7000)
      }
    },
    mounted(){
      this.showBalls()
    },
    watch:{ // 어떤 값이 바뀌었는지 아닌지 지켜보는 것. 여기는 데이터를 명시해줘야함
      winBalls(value, oldValue){ // watch를 자주 쓰지말자.. 객체를 여기에 넣으면 참조관계때매 정확히 값이 안나올수도
        if(value.length===0){
          this.showBalls()
        }
      }
    },
    beforeDestroy(){
      timeOuts.forEach((t)=>{
        clearTimeout(t)
      })
    },
    created(){
      
    }
  }
</script>
<style scoped>

</style>