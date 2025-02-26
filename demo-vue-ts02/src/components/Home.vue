<script setup lang="ts">
import { Ref, ref } from 'vue';
const username: Ref<String> = ref(window.sessionStorage.getItem('username') || "游客")
import { useRouter } from 'vue-router';
const router = useRouter()
function logout(): void {
    console.log('logout')
    window.sessionStorage.removeItem('username')
    router.push('/login')
}
</script>

<template>
    <div>
        <h1>Home, 欢迎{{ username }}!</h1> <br/>
        <button @click="logout()">退出登录</button>
    </div>
</template>

<style scoped>

</style>
