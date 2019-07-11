import axios from "axios";
import { message, Message } from "element-ui";

axios.defaults.baseURL = ' http://blog-server.hunger-valley.com';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//url,请求方式，请求内容data（字符串）

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url, method: type 
    }
    if (type.toLocaleLowerCase() === 'get') {
      option.params = data
    } else {
      option.data
    }
    axios(option).then(res => {
      if (res.data.stauts === 'ok') {//请求成功
        resolve(res.data)
      } else {
        Message.error(res.data.msg);//响应错误错误
        reject(res.data)
      }
    }).catch(err => {
      message.error("网络异常");
      reject({ msg: '网络异常' }); //抛出错误原因
    });
  });
}