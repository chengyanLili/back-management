//接口请求
import axios from 'axios'

//接口调用
export const getMenu = (param) => {
    return axios.request({
        url:'/permission/getMenu',
        method:'post',
        data:param
    })
}
export const getData = () => {
return axios.request({
    url:'/home/getData',
    method:'get'    //默认情况下是get请求，所以这一行其实可以省略
})
}