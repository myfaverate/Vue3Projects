<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function toDetail(id, language) {
    router.push(`/detail/${id}/${language}`)
}
</script>

<template>
    <div>
        <!-- <router-link to="/detail?name='张书豪'&age=18">Detail</router-link> | -->
        <router-link to="/detail/1/Java">Detail</router-link> <br/>
        <button @click="toDetail(2, 'php')">Detail</button> <br/>

        <router-link to="/kvDetail?id=1&language=Java">KVDetail</router-link> <br/>
        <router-link v-bind:to="{ path: '/kvDetail', query: {id: 3, language: 'Python'} }">KVDetailObject</router-link> <br/>
        <button @click="router.push('/kvDetail?id=2&language=PHP')">KVDetail</button> <br/>
        <router-view />
    </div>
</template>

<style scoped>

</style>
