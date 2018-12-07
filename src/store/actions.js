import * as types from './mutation-types'

export default {
  action1 ({ commit}) {
    commit(types.FOR_ACTION1);
  },
  action2 ({ commit}, payload) {
    commit(types.FOR_ACTION2, payload);
  },
  action3 ({ dispatch, commit}, payload) {
    commit(types.FOR_ACTION2, payload);
  },
  //异步等待处理多个action
  async action4 ({ dispatch, commit }, payload) {
    await dispatch('action3', payload);
    setTimeout(() => {
      commit(types.FOR_ACTION2, payload)
    },1000);
  }
}
