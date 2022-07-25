/*
 * @Author: Vinton
 * @Date: 2020-12-06 11:11:40
 * @Description: file content
 */
const { name } = require('./package')
const { port } = require('./src/config')
console.log('=========>',port)
module.exports = {
    devServer: {
        port,
        // 允许被主应用跨域fetch请求到
        headers: {
            'Access-Control-Allow-Origin': '*'
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