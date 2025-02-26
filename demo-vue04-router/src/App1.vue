<script setup>
// 编程式路由
import { useRouter } from 'vue-router'
const router = useRouter()
let i = 0
function show(){
    switch (i % 4) {
        case 0:
            router.push('/home')
            break;
        case 1:
            router.push('/list')
            break;
        case 2:
            router.push('/add')
            break;
        case 3:
            router.push('/update')
            break;
        default:
            break;
    }
    i ++ 
}
</script>

<template>
    <div>
        <router-link to="/home">Home</router-link> <br/>
        <router-link to="/list">List</router-link> <br/>
        <router-link to="/add">Add</router-link> <br/>
        <router-link to="/update">Update</router-link> <br/>
        <button @click="show()">路由</button>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>
