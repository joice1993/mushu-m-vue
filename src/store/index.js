import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import mutations from './mutations';
import actions from './actions';

const state = {
  url: 'a_global_url',
  todos: [
    { id: 1, text: 'todo1', done: true},
    { id: 2, text: 'todo2', done: false}
  ],
  obj: { a: '110', b: '120'},
  count: 0,
}

const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done);
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
