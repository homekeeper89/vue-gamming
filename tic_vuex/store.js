import Vuex from 'vuex'

export default new Vuex.Store({
  state:{

  },// vue의 data와 비슷한 역할
  getters:{}, // vue의 computed와 비슷
  mutations:{

  },//state를 수정할때 사용, 동기적, state를 수정할려면 무조건 mutations을 통해서
  actions:{} // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할때
})