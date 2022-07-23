import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//我这里直接全局引入了，按理来说应该按需引入的
import router from '../router/index'
import store from './store' //引入store
import http from 'axios'
import '../api/mock.js'

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$http = http

new Vue({
  store,  //添加配置项store
  router,
  render: h => h(App),
}).$mount('#app')
