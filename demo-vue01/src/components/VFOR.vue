<script lang="js" setup>

import { reactive } from 'vue'

class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }
    toString(){
        return `Person(name=${this.name}, age=${this.age}, gender=${this.gender})`
    }
}
const personList = reactive([])
for(let i = 0; i < 10; i ++ ){
    personList.push(new Person(`张三:${i}`, 18 + i, i % 2 == 0 ? "男" : "女"))
}
function deletePerson(index){
    personList.splice(index, 1)
}
</script>
<template>
    <ol>
        <li v-for="(person, index) in personList" v-bind:key="index">
            <h3>name: {{ person.name }} -> age: {{ person.age }} -> gender: {{ person.gender }} -> index: {{ index }} -> {{ person.toString() }}</h3>
        </li>
    </ol>
    <button @click="deletePerson(0)">删除</button>
</template>
<style lang="css" scoped>
</style>