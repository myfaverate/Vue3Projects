<script setup lang="ts">
import { definedPerson } from "../store/store" 
const person = definedPerson()
</script>

<template>
    <div>
        <h1>修改Pinia数据</h1> <br/>
        姓名: <input type="text" v-model="person.name" /> <br/>
        年龄: <input type="text" v-model="person.age" /> <br/>
        爱好:
        <input type="checkbox" v-model="person.hobbies" value="篮球" />篮球
        <input type="checkbox" v-model="person.hobbies" value="唱歌" />唱歌
        <input type="checkbox" v-model="person.hobbies" value="跳舞" />跳舞  <br/>
        <button @click="person.doubleAge()">年龄加倍</button> <br/>
        <button @click="person.$reset()">重置</button> <br/>
        <button @click="person.$patch({name: '李四', age: 25, hobbies: ['篮球']})">设置多个属性值</button> <br/>
        Person: {{ person }} <br/>
    </div>
</template>

<style scoped>

</style>
