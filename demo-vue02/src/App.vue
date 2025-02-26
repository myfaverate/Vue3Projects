<script setup>

    import Content from './components/Content.vue'
    import TitleHeader from './components/TitleHeader.vue'
    import Navigator from './components/Navigator.vue'
    import { ref } from 'vue'

    const navigatorData = ref("")
    // 接收数据
    function receiver(data){
        console.log("接收到数据")
        navigatorData.value = data
    }

</script>

<template>
    导航数据: {{ navigatorData }}
    <TitleHeader class="header" />
    <Navigator class="navigator" @changeContent="receiver"/>
    <Content class="content" v-bind:message="navigatorData"/>
</template>

<style lang="css" scoped>
.header {
    height: 80px;
    border: 1px solid #d5249d;
}
.navigator {
    width: 15%;
    height: 800px;
    border: 1px solid #53de5d;
    float: left;
}
.content {
    width: 80%;
    height: 800px;
    border: 1px solid #242795;
    float: right;
}
</style>
