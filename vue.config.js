const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // devServer:{
  //   proxy:{
  //     '/api':{    //匹配所有以'/api1'开头的请求路径
  //       target:'http://localhost:5000',   //代理目标的基础路径
  //       pathRewrite:{'^/api1':''},
  //       ws:true,
  //       changeOringin:true
  //     }
  //   }
  // }
})
