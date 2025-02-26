<script setup>
const url = "https://cdn.pixabay.com/photo/2023/02/06/18/37/winter-7772554_960_720.jpg"
const title = "图片"
</script>
<template>
<img v-bind:src="url" v-bind:title="title"/>
</template>
<style lang="css" scoped>
</style>