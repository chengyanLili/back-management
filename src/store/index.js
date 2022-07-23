import Vue from 'vue'
import Vuex from 'vuex' //引入vuex文件
import tab from './tab'
Vue.use(Vuex) //应用vuex插件

export default new Vuex.Store({
    modules:{
        tab
    }
})