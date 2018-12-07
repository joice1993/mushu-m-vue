// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import store from './store/index'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

//注册插件
Vue.use(require('vue-wechat-title')); //微信头部标题插件
Vue.use(MintUI);//UI框架

//使用插件
Vue.prototype.$http = axios; //将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$http使用
Vue.prototype.Toast = MintUI.Toast;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
