import axios from 'axios';
import qs from 'qs'
import router from "../router/index";
import { Toast, Indicator, } from 'mint-ui'

let service = axios.create({
  baseURL: 'https://easy-mock.com/mock/5b4701ec53a0115a488683b2/wapi',
  timeout: 30000,
  transformRequest: [(data) =>{
    return qs.stringify(data)
  }],
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

// request请求拦截器
service.interceptors.request.use((config) =>{
  if (localStorage.token) {
    config.headers.Authorization = localStorage.token;
  }
  Indicator.open('加载中...') // store.commit('UPDATE_LOADING',true)
  return config;
}, function (error) {
  Toast({
    message: '网络拥堵',
    iconClass: 'iconfont icon-guanbi'
  })
  return Promise.reject(error);
});

// response响应拦截器
service.interceptors.response.use((response) =>{
  Indicator.close();
  if(response.code == 100013){
    router.push('/login')
  }
  return response;
}, function (error) {
  Indicator.close();
  Toast({
    message: error.msg,
    iconClass: 'iconfont icon-guanbi'
  })
  return Promise.reject(error);
});

// AUTH_TOKEN 自己得token值
// service.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

export default service
