<template>
    <el-menu default-active="1-4-1" 
        class="el-menu-vertical-demo"
        background-color="#545c64" 
        text-color="#fff"
        active-text-color="#ffd04b" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse">
        <h3>{{isCollapse ? '后台':'通用后台管理系统'}}</h3>
        <el-menu-item @click="clickMenu(item)" 
        v-for="item in noChildren" :index="item.path + ''" :key="item.path">
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.lable }}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :index="item.path + ''" :key="item.path">
            <template slot="title">
                <i :class="'el-icon-' + item.icon"></i>
                <span slot="title">{{ item.lable }}</span>
            </template>
            <el-menu-item-group v-for="(subitem, subIndex) in item.children" :key="subitem.path">
                <el-menu-item :index="subitem.path">{{ subitem.lable }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: 'Aside',
    data() {
        return {
            menu: [
                {
                    path: '/home',
                    name: 'home',
                    lable: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                 {
                    path: '/user',
                    name: 'user',
                    lable: '用户管理',
                    icon: 'user-solid',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'Mall',
                    lable: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                },
                {
                    lable: '其他',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            name: 'Page1',
                            lable: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/page2',
                            name: 'Page2',
                            lable: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        },
                    ]
                },
            ]
        };
    },
    //用计算属性将menu中的进行筛选渲染：有子路由和没有子路由的两个路由数组（noChildren和hasChildren)
    computed: {
        noChildren() {
            return this.menu.filter(item => !item.children)
        },
        hasChildren() {
            return this.menu.filter(item => item.children)
        },
        //
        isCollapse(){
            return this.$store.state.tab.isCollapse
        }
    },
    methods: {
        handleOpen(key, keyPath) {

        },
        handleClose(key, keyPath) {

        },
        clickMenu(item){
            this.$router.push({
                name:item.name
            })
        }
    }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100%;
}
.el-menu--collapse{
    min-height: 400px;
    height: 100%;
}
h3{
    color:#fff;
    text-align: center;
    line-height: 68px;
}
</style>