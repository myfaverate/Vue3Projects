<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineSchedule } from '../store/scheduleStore';
import { defineMyUser } from '../store/userStore';

const sysUser = defineMyUser()
const schedule = defineSchedule()
const router = useRouter()

function logout() {
    sysUser.$reset()
    schedule.$reset()
    router.push('/login')
    console.log('logout...')
}

</script>

<template>
    <div>
        <h1 class="title">欢迎使用日程管理系统</h1>
        <div v-if="sysUser.username == ''">
            <router-link to="/login">
                <button>登录</button>
            </router-link>
            <router-link to="/register">
                <button>注册</button>
            </router-link>
        </div>
        <div v-else>
            欢迎 {{ sysUser.username }} <br/>
            <button @click="logout()">退出登录</button>
            <router-link to="/showSchedule">
                <button>查看我的日程</button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    .title {
        color: rgb(24, 231, 21);
        text-align: center;
        font-family: 幼圆, 'Times New Roman', Times, serif;
    }
</style>
