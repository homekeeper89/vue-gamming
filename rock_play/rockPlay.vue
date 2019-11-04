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
  let interval = null;
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
    },
    created(){ // 보여지긴 하지만 화면 나타나기 전 
      console.log('created')
    },
    mounted(){ // 화면 나타난 후
      // console.log('mounted')
      interval = setInterval(()=>{
        if(this.imgCoord === rspCoords.바위){
          this.imgCoord = rspCoords.가위
        }else if(this.imgCoord === rspCoords.가위){
          this.imgCoord = rspCoords.보
        }else if(this.imgCoord === rspCoords.보){
          this.imgCoord = rspCoords.바위
        }
      }, 100)
      // 위 인터벌은 계속 살아 있는다. 컴포넌트가 사라져도 존재하므로 => 메모리 누수가 발생함
    },
    updated(){ // 화면 내용물이 바뀌면
      // console.log('updated')
    },
    beforeDestroy(){ 
      clearInterval(interval)
    },
    destroyed(){ // 화면에 있다가 사라지면
      // console.log('destroyed')
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