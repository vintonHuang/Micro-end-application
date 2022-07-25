/*
 * @Author: Vinton
 * @Date: 2020-12-06 10:46:32
 * @LastEditTime: 2022-07-25 21:59:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /main/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入qiankun所需方法
import {
    registerMicroApps, // 注册子应用
    runAfterFirstMounted, // 当地一个子应用装载完毕
    setDefaultMountApp, // 设置默认装载的子应用
    // initGlobalState, // 微前端之间的通信
    start, // 启动
} from 'qiankun'

// 渲染主应用
new Vue({
    render: function (h) { return h(App) },
}).$mount('#container')
console.log('主应用====>')
// 注册子应用
registerMicroApps([
    {
        name: 'one',
        entry: '//localhost:6661',
        container: '#micro-view',
        activeRule: '/one',
        props: {
            msg: {
                data: {
                    mt: 'you are one'
                }
            },
            fn: {
                show(msg) {
                    console.log('one:', msg);
                }
            }
        }
    },
    {
        name: 'two',
        entry: '//localhost:6662',
        container: '#micro-view',
        activeRule: '/two',
        props: {
            msg: {
                data: {
                    mt: 'you are two'
                }
            },
            fn: {
                show(msg) {
                    console.log('two:', msg);
                }
            }
        }
    }
],
    {
        beforeLoad: [
            app => {
                console.log('beforeLoad', app);
            }
        ],
        beforeMount: [
            app => {
                console.log('beforeMount', app);
            }
        ],
        beforeUnmount: [
            app => {
                console.log('beforeUnmount', app);
            }
        ],
        afterUnmount: [
            app => {
                console.log('afterUnmount', app);
            }
        ]
    })

setDefaultMountApp('one')

// 第一个子应用加载完毕后回调
runAfterFirstMounted(() => {
    console.log('第一个子应用加载完毕后的回调');
})

// 启动qiankun
start()