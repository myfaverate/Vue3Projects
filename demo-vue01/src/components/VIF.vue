<script lang="js" setup>

import { ref } from 'vue';

const isShow = ref(-1)

function showH1(){
    isShow.value ++ 
}

</script>
<template>
<h1 v-if="isShow % 3 == 0">你好</h1>
<h1 v-else-if="isShow % 3 == 1">世界</h1>
<h1 v-else-if="isShow % 3 == 2">Java</h1>
<h1 v-else>JavaScript</h1>
<h1 v-show="isShow % 2 == 0">偶数</h1>
<button @click="showH1()">按钮</button>
</template>
<style lang="css" scoped>
</style>