<template>
  <div>
    <div id="computer" :style="{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`}"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{result}}</div>
    <div>현재 {{score}} 점</div>
  </div>
</template>
<script>
  export default { // export default 를 해서 main.js 에서 import from 으로 가져올 수 가 있다
    data(){
      return{
        result:'',
        score:0, 
      }
    },
    computed:{ // 일반 data를 가공해서 쓸때 computed를 사용한다
      
    },
    methods:{
      onClickButton(choice){

      }
    }
  }
</script>
<style scoped>
  #computer{
    width:142px;
    height:200px;
    background-position:0 0;
  }
</style>