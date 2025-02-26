<script setup>
import { ref } from "vue"
import VFOR from "./components/VFOR.vue";
import Calculate from "./components/Calculate.vue";
// 定义一些展示到html的数据
const counter = ref(1)
function counterPlus(){
    counter.value ++ 
}
function counterMinus(){
    counter.value --
}
</script>

<template>
    <button @click="counterPlus()">+</button>
    <span>{{ counter }}</span>
    <button @click="counterMinus()">-</button> 
    <Calculate/>
</template>

<style scoped>

</style>
