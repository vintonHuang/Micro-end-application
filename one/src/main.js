/*
 * @Author: your name
 * @Date: 2020-12-06 11:03:25
 * @LastEditTime: 2022-07-25 22:01:21
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
console.log('微应用')
function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? 'one' : '/',
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
  console.log('one bootstrap');
}
// 生命周期 - 挂载后
export async function mount() {
  console.log('one mount');
  // 渲染
  render()
}
// 生命周期 - 解除挂载
export async function unmount(){
  console.log('one unmount');
}

// 本地调试
if(!window.__POWERED_BY_QIANKUN__){
  render()
}