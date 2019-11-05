import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex)//1. 반드시 연결 this.$store가 가능함
// Vue.use(axios) > this.$axios, 일종의 미들웨어 개념
// main.js 에서 연결할 경우 로테이션 에러가 발생함.

export const SET_WINNER = 'SET_WINNER'
export const CLICK_CELL = 'CLICK_CELL'
export const CHANGE_TURN = 'CHANGE_TURN'
export const RESET_GAME = 'RESET_GAME'
export const NO_WINNER = 'NO_WINNER'
// export와 export default의 차이
// export 한 애들 : import {SET_WINNER} from  > 중괄호를 묶어줘야한다.
// export default : import Vuex from
export default new Vuex.Store({
  state:{
    tableData:[
      ['','',''],
      ['','',''],
      ['','',''],
    ],
    turn:'O',
    winner:false
  },// vue의 data와 비슷한 역할
  getters:{ // state에서 추가적인 작업(계산) 이 필요로 할때
    turnMessage(state){
      return state.turn + '님이 승리하셨습니다.'
    }
  }, // vue의 computed와 비슷
  mutations:{ // 대문자로 하는게 규칙
    [SET_WINNER](state, winner){
      state.winner = winner;
    },
    [CLICK_CELL](state, {row, cell}){
      Vue.set(state.tableData[row], cell,state.turn)
      // 배열 수정시 Vue.set 또는 this.$set
    },
    [CHANGE_TURN](state){
      state.turn = state.turn ==='O' ? 'X':'O'
    },
    [RESET_GAME](state){
      state.turn = 'O'
      state.tableData = [['','',''],['','',''],['','','']]
      
    },
    [NO_WINNER](state){
      state.winner = ''
    }
  },//state를 수정할때 사용, 동기적, state를 수정할려면 무조건 mutations을 통해서
  actions:{} // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할때
})