/**
 * Created by Administrator on 2022/1/14.
 */

import axios from 'axios';
axios.defaults.adapter = require('axios/lib/adapters/http');
//  import qs from "qs";
import Store  from 'electron-store';
const store  = new Store();
import { ElLoading, ElMessage } from 'element-plus';


const config = {
    baseURL: process.env.VUE_APP_URL,
    timeout: 60000,
    validateStatus: function(status) {
        return status >= 200 && status < 500; // 默认的
    },
};
 
const service = axios.create(config);

let showLoading = false;

// 进度条
let globalShowLoading;

function startLoading() {
    globalShowLoading = ElLoading.service({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)',
    });
}

function endLoading() {
    globalShowLoading.close();
}
 
// request拦截器
service.interceptors.request.use(
    config => {
        
        // 解决query无法传递数组的问题
        //  config.paramsSerializer = (params) => qs.stringify(params, {
        //      arrayFormat: "repeat",
        //  });
        let token;
        let getToken = store.get('token');
        if(getToken) {
            token = JSON.parse(store.get('token').access_token);
        }
        if(token) {
            config.headers['Authorization'] = 'Bearer ' + token;
            store.set('token', getToken);
        }
        

        if (config.showLoading == true) {
            showLoading = true;
            startLoading();
        }
       

        if(config.timeout > 60000){
            ElMessage.error('请求超时');
            endLoading();
        }
        return config;
    },
    err => {
        if (config.showLoading == true) {
            endLoading();
        }
        return Promise.reject(err);
    }
);
 
// 响应拦截器
service.interceptors.response.use(
    res => {
        if (res.config.showLoading == true) {
            endLoading();
        }
        // logger.main.debug('message', 'info');
        return res;
    },
    err => {
 
        let errorMessageObject;
        errorMessageObject = err;

        if (showLoading == true) {
            endLoading();
        }

        return Promise.reject(errorMessageObject);
    }
);
 
function get(url, params = {}, config) {
    return service.get(url, { params, ...config });
}
 
function post(url, data, config) {
    return service.post(url, data, config);
}
 
function put(url, data, config) {
    return service.put(url, data, config);
}
 
export { get, post, put };
 
export default service;
 