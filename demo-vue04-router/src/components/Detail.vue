<script setup>
// 接收路由参数
import { useRoute } from 'vue-router'
import { reactive, onUpdated } from 'vue'
const route = useRoute()
const params = reactive( route.params )

onUpdated(() => {
    params.id = route.params.id
    params.language = route.params.language
    console.log('Detail updated')
})

</script>

<template>
    <div>
        <h1>Detail</h1> <br/>
        <p>id: {{ params.id }}</p> <br/>
        <p>language: {{ params.language }}</p>
        <p>params: {{ params }}</p>
    </div>
</template>

<style scoped></style>
