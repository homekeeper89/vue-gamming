<template>
  <div>
    <div>
      <router-link to="/game/index-baseball">게임매쳐</router-link>
      <router-link to="/game/number-baseball?data=1&hello=world&vue=router">숫자야구</router-link>
      <router-link to="/game/response-check">반응속도</router-link>
      <router-link to="/game/rock-scissors-paper">가위바위보</router-link>
      <router-link to="/game/lotto-generator">로또생성기</router-link>
    </div> <!--레이아웃, 공통적인 부분 -->
    <router-view></router-view> <!--바뀌는 애들이 들어가는 곳 -->
  </div>
</template>
<script>
  import router from './routes'
  import store from './store'
  export default{
    router,
    store,
  }
</script>