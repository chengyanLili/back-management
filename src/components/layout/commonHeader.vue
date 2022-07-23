<template>
    <header>
        <div class="left-content">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <span>首页</span>
        </div>
        <div class="right-content">
            <el-dropdown trigger="click" size="mini">
                <span><img class="user" :src="userImg" alt=""></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            userImg: require('@/assets/img/user.jpeg')
        }
    },
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu')
        }
    }
};
</script>
<style lang="less">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height: 100%;
    color: #fff;
}

.left-content {
    display: flex;
    align-items: center;
    .el-button{
        margin-right:20px;
    }
}
.right-content{
    .user{
        width:40px;
        height:40px;
        border-radius: 50%;
    }
}
</style>