import axios from 'axios';

import apis from './api';

const ajax = axios.create({
  baseURL:apis.baseUrl
})

export const getUserList = ()=>{
  return ajax({
    url:apis.getUserList,
    method:'post',
    params: {
      ID: 12345
    },
    timeout: 1000,
    withCredentials: false, // default   // 是否携带cookie信息
     // 请求体数据
    // 只有当请求方法为'PUT', 'POST',和'PATCH'时可用
    // 当没有设置`transformRequest`时，必须是以下几种格式
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - Browser only: FormData, File, Blob
    // - Node only: Stream, Buffer
    data: {
      firstName: 'Fred'
    },
  });
}