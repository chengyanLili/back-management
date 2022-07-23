//axios的二次封装
import axios from 'axios'
import config from '../config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest{
    constructor(baseUrl){
        this.baseUrl =baseUrl
    }
    getInsideConfig(){
        const config = {
            baseUrl:this.baseUrl,
            header:{}
        }
        return config
    }
    //拦截器的配置
    interceptors(instance){
        //添加请求拦截器
        instance.interceptors.request.use(function(config){
            //在发送请求之前做些什么
            return config;
        },function(error){
            return Promise.reject(error)
        });
        //添加响应拦截器
        instance.interceptors.response.use(function(response){
            return response;
        },function(error){
            return Promise.reject(error)
        })
    }
    request(options){
        const instance = axios.create()
        options = {...this.getInsideConfig(),...options}
        this.interceptors(instance)
        return instance(options)
    }
}
export default new HttpRequest(baseUrl)