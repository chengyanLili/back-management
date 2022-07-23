import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {//后续的页面都会继承这个路由
        path:'/',
        name:'Main',
        component:()=>import('../src/views/Main.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component:() => import('../src/views/home/home.vue')
            },
            {
                path:'/user',
                name:'user',
                component:() => import('../src/views/user/User.vue')
            }
        ]
    },

   
]

const router = new VueRouter({
    mode:'history',
    routes
})
export default router