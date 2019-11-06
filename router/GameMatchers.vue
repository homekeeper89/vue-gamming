<template>
  <div v-if="currentGame === 'number-baseball'">
    <number-baseball></number-baseball>
  </div>
  <div v-else-if="currentGame === 'response-check'">
    <response-check></response-check>
  </div>
  <div v-else-if="currentGame === 'lotto-generator'">
    <lotto-generator></lotto-generator>
  </div>
  <div v-else>일치하는 게임이 없음</div>
</template>
<script>
import numberbaseball from '../num_baseball/numberbaseball'
import responseCheck from '../check_response/responseCheck'
import rockPlay from '../rock_play/rockPlay'
import LottoGenerator from '../lotto/LottoGenerator'
import GameMatchers from './GameMatchers'
export default {
  components:{
    'number-baseball':numberbaseball,
    'response-check':responseCheck,
    'lotto-generator':LottoGenerator
  },
  computed:{
    currentGame(){
      return this.$route.params.name
    }
  },
  mounted(){
    debugger
    console.log(this.$route)
  }
}
</script>

