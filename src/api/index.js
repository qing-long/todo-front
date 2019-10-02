import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

// 创建实例时设置配置的默认值
const instance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000
});
Vue.use(VueAxios, instance);

instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
window.apis = instance;
