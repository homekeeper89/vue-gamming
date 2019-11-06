import Vue from 'vue';
import VueRouter from 'vue-router'
import numberbaseball from '../num_baseball/numberbaseball'
import responseCheck from '../check_response/responseCheck'
import rockPlay from '../rock_play/rockPlay'
import LottoGenerator from '../lotto/LottoGenerator'
import GameMatchers from './GameMatchers'

Vue.use(VueRouter)
// 기본은 hash > 주소에 #이 들어감, #이 들어가면 SEO에 잘 안걸림 단 새로고침하면 페이지가 뜨지않음 새로고침을 해결하기 위해선 sever가 필요로 하다... 백엔드 서버를 말하는건가?
export default new VueRouter({
  mode:'history',
  routes:[
    {path:'/number-baseball', component:numberbaseball},
    {path:'/response-check', component:responseCheck},
    {path:'/rock-scissors-paper', component:rockPlay},
    {path:'/lotto-generator', component:LottoGenerator},
    {path:'/game/:name', component:GameMatchers} // :name 이 동적으로 바뀐다
  ]
})