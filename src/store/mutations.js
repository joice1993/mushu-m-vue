import * as types from './mutation-types'

export default {
    [types.CHANGE_OBJ] (state, payload) {
      //mutation突变中，修改state里的对象的属性，要替换老对象，下面是用es6对象展开运算符赋值
      state.obj = {...state.obj, c: payload.c}
    },
    [types.FOR_ACTION1](state) {
      state.count += 10;
    },
    [types.FOR_ACTION2](state, payload) {
      state.count += payload.add;
    }
}

