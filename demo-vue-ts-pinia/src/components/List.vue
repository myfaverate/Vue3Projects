<script setup lang="ts">
import { definedPerson } from "../store/store" 
const person = definedPerson()
</script>

<template>
    <div>
        <h1>展示Pinia数据</h1>
        Person: {{ person }} <br/>
        <ul>
            <li v-for="(hobby, index) in person.hobbies" v-bind:key="index">{{ hobby }}</li>
        </ul> 
        <br/>
    </div>
</template>

<style scoped>

</style>
