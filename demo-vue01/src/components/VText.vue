<script setup>
import { ref } from "vue"
let message = ref("<h1>Hello</h1>")
function add(){
    message.value = message.value.concat(' ', "<h1>World</h1>")
    console.log(`message: ${message.value}`)
}
function over(){
    console.log("鼠标悬停...")
}
</script>

<template>
    <div v-html="`message: ${message}`"></div>
    <button @click="add()" @mouseover.once="over()">追加</button>
</template>

<style lang="css">

</style>