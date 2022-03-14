<!--
 * @Author: your name
 * @Date: 2020-12-06 11:34:57
 * @LastEditTime: 2020-12-09 22:34:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /two/src/components/About.vue
-->
<template>
    <div class="about">
        this is two about
        <br>
        <button @click="testFn">测试事件</button>
        <br>
    </div>
</template>

<script>
    export default {
        name: "About",
        methods: {
            testFn(){
                this.$show('测试事件成功')
            }
        }
    }
</script>

<style scoped></style>