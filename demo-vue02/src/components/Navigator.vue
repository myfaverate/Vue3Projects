<script lang="js" setup>
// 向App父组件导入参数
import { defineEmits } from 'vue'
const changeContent = defineEmits(['changeContent'])
function send(content){
    changeContent("changeContent", content)
}
</script>
<template>
    <ul>
        <li @click="send('学员管理')">学员管理</li>
        <li @click="send('图书管理')">图书管理</li>
        <li @click="send('教室管理')">教室管理</li>
        <li @click="send('课程管理')">课程管理</li>
        <li @click="send('教师管理')">教师管理</li>
        <li @click="send('班级管理')">班级管理</li>
        <li @click="send('学校管理')">学校管理</li>
        <li @click="send('学科管理')">学科管理</li>
    </ul>
</template>
<style lang="css" scoped>
ul{
    margin-top: 0%;
}
</style>