<template>
  <div>
    <div id="computer" :style="computedStyleObj"></div>
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
  const rspCoords = {
    바위 : 0,
    가위:'-142px',
    보:'-284px'
  }
  export default { // export default 를 해서 main.js 에서 import from 으로 가져올 수 가 있다
    data(){
      return{
        imgCoord:rspCoords.바위,
        result:'',
        score:0, 
      }
    },
    computed:{ // 일반 data를 가공해서 쓸때 computed를 사용한다
      computedStyleObj(){
        return {background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`}
      }
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