import axios from 'axios' 
import qs from 'qs'
import { Message } from 'element-ui'



/* 
    请求拦截器
    1.设置相应头
    2.统一处理参数
*/
axios.interceptors.request.use(config=>{
    console.log(config);
    const { method,headers,data,params } = config;
    headers['x-token'] = 'xxxxx'
    if ( method === 'get') { 
        
    }else{ //post,put请求
        
    }
    return config
},err=>{
    return Promise.reject(err)
})



export default axios