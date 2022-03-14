<!--
 * @Author: Vinton
 * @Date: 2020-12-09 22:55:29
 * @Description: file content
-->
<template>
  <div>
    <button @click="changeView('/one')">子应用one</button>
    &nbsp;
    <button @click="changeView('/two')">子应用two</button>
    <hr />
    <!--这里的 micro-view 对应的是上面 main.js 里面的子应用配置的 container: '#micro-view' -->
    <div id="micro-view"></div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  },
  methods: {
    changeView(who) {
      window.history.pushState(null, who, who)
    },
  }
}
</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
<style>
