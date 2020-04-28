
//导入axios
import axios from 'axios'

//最终方式：Promise方式
export function request(config) {
  //1、创建axios的实例
    const instance = axios.create({
      baseURL:"http://152.136.185.210:8000/api/h8",
      timeout: 50000
    })

  //2、axios的拦截器
  //2.1、请求拦截
  instance.interceptors.request.use(config=>{
    console.log(config)
    //会在这里做什么事情呢？
    /*
    1、比如config中的一些信息不符合服务器的要求

    2、每次访问网络请求是，都希望在界面中显示一个网络请求的图标

    3、某些网络请求，必须携带一些特殊的信息(token)
     */
    return config
  },err => console.log(err))

  //2.2、响应拦截
  instance.interceptors.response.use(result=>{
    return result.data
  },error=>{

  })



  //3、发送真正的网络请求，直接返回一个Promise，因为axios或实例返回的就是一个Promise,要不怎么能调.then 和 .catch
  return instance(config)
}



//第一种方式
/*//创建并导出:封装模块
export function request(config,success,failure) {
  //创建axios的实例
  const instance = axios.create({
    baseURL: 'HTTP://123.207.32.32:8000',
    timeout: 50000
  })

  //发送真正的网络请求
  instance(config).then(res=>success(res)).catch(err=>failure(err))
}*/

//第二种方式
/*
//创建并导出：封装模块
export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'HTTP://123.207.32.32:8000',
    timeout: 50000
  })

  //发送真正的网络请求
  instance(config.baseConfig).then(res=>config.success(res)).catch(err=>config.failure(err))
}
*/

//第三种方式
/*
export function request(config) {
  return new Promise((resolve,reject)=>{
    //创建axios的实例
    const instance = axios.create({
      baseURL: 'HTTP://123.207.32.32:8000',
      timeout: 50000
    })
    //发送真正的网络请求
    instance(config).then(res=>resolve(res)).catch(err=>reject(err))
  })
}
*/
