<script setup lang="ts">
import { Ref, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

class User{
    public name: String
    public age: String
    constructor(name: string, age: String){
        this.name = name
        this.age = age
    }
    public getName(): String{
        return this.name
    }
    public getAge(): String{
        return this.age
    }
    public setName(name: String): void{
        this.name = name
    }
    public setAge(age: String): void{
        this.age = age
    }
    public toString(): String{
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
const user: Ref<User> = ref(new User('John Doe', "30"))
console.log(user.toString())
watchEffect(() => {
    console.log(user.value.toString())
})
const router = useRouter()
function login(): void {
    console.log('login')
    if(user.value.name === 'root' && user.value.age.toString() === '1'){
        console.log('登录成功')     
        window.sessionStorage.setItem('username', user.value.name.toString())
        router.push('/home')
    }else{
        console.log('登录失败')
    }
} 
</script>

<template>
    <div>
        账号: <input type="text" v-model="user.name" /> <br />
        密码: <input type="password" v-model="user.age" /> <br />
        <button @click="login()">登录</button>
        <button @click="console.log(user)">打印信息</button>
    </div>
</template>

<style scoped></style>
