<!--
 * @Author: your name
 * @Date: 2020-12-06 11:05:18
 * @LastEditTime: 2022-03-14 22:31:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /two/src/App.vue
-->
<template>
  <div id="app">
    <router-link to="/home">首页</router-link>|
    <router-link to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>