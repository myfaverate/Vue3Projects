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
const p = new Person("Alice", 18, "女")
const person = reactive(p)
function addAge(){
    person.age ++
}
</script>
<template>
    <h1>计算属性</h1>
    <button @click="addAge">年龄+1</button>
{{ person.toString() }}
</template>
<style lang="css" scoped>
</style>