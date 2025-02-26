<script setup>
// 接收路由参数
import { useRoute } from 'vue-router'
import { reactive, onUpdated } from 'vue'
const route = useRoute()
const params = reactive( route.query )

onUpdated(() => {
    params.id = route.query.id
    params.language = route.query.language
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
