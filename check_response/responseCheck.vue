<template>
  <div>
    <div id="screen" :class='state' @click="onClickScreen">{{message}}</div>
    <div v-show="result.length">
      <div>평균 시간:{{average}}ms</div>
      <button @click="onReset">리셋</button>
    </div>
  </div>
</template>
<script>
  let startTime = 0; 
  let endTime = 0;
  let timeOut=null;
  export default { // export default 를 해서 main.js 에서 import from 으로 가져올 수 가 있다
    data(){
      return{
        result:[],
        state:'waiting',
        message:'클릭해서 시작하세요'
      }
    },
    computed:{ // 일반 data를 가공해서 쓸때 computed를 사용한다
      average(){
        // 아래 값이 캐싱된 상태, result가 바뀌었을때만 계산된다. 다른 data가 바뀌었을땐 이상없고
        return this.result.reduce((a,c) => a+c, 0) / this.result.length || 0
      }
    },
    methods:{
      onReset(){
        this.result = []
      },
      onClickScreen(){
        if(this.state ==='waiting'){
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하세요'
          setTimeout(()=>{
            this.state = 'now'
            this.message="지금 클릭"
            startTime = new Date();
          }, Math.floor(Math.random() * 1000 + 2000))
        }else if(this.state === 'ready'){
          clearTimeout(timeOut)
          this.state = 'waiting'
          this.message = '너무 성급하시군요 초록색이 된 후 클릭하세요'
        }else if(this.state === 'now'){
          endTime = new Date();
          this.state = 'waiting'
          this.message = '클릭해서 시작하세요'
          this.result.push(endTime - startTime);
        }
      }
    }
  }
</script>
<style scoped>
  #screen{
    width:300px;
    height:200px;
    text-align:center;
    user-select:none;
  }
  #screen.waiting{
    background-color:aqua;
  }
  #screen.ready{
    background-color:red;
  }
  #screen.now{
    background-color:greenyellow
  }
</style>