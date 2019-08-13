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
    
  });
}