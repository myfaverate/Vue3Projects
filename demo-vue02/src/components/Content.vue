<script lang="js" setup>
import { defineProps } from 'vue'
defineProps({
    message: String
})
</script>
<template>
    <div>
        这里是主要内容区域: {{ message }}
    </div>
</template>
<style lang="css" scoped>
</style>