/*
 * @Author: your name
 * @Date: 2020-12-06 11:40:00
 * @LastEditTime: 2020-12-06 12:07:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /two/vue.config.js
 */
const {name} = require('./package')

const port = 6662

module.exports = {
    devServer: {
        port,
        // 允许被主应用跨域fetch请求到
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            // 把子应用打包成umd库格式
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
}