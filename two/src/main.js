/*
 * @Author: your name
 * @Date: 2020-12-06 11:03:25
 * @LastEditTime: 2020-12-09 22:41:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /one/src/main.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from "./router";
import './public-path'

Vue.use(VueRouter)

Vue.config.productionTip = false

let router = null
let instance = null

function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? 'two' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    render:h=>h(App),
  }).$mount('#app')
}

// 生命周期 - 挂载前
export async function bootstrap(props) {
  console.log('two bootstrap');
}
// 生命周期 - 挂载后
export async function mount(props) {
  console.log('two mount');

  // 设置主应用下发的方法
  Object.keys(props.fn).forEach(method =>{
      Vue.prototype[`$${method}`] = props.fn[method]
  })
  // 渲染
  render()
}
// 生命周期 - 解除挂载
export async function unmount(){
  console.log('two unmount');
}

// 本地调试
if(!window.__POWERED_BY_QIANKUN__){
  render()
}