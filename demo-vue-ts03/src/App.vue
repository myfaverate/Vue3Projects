<script setup lang="ts">
import axios from 'axios';
import { Ref, ref } from 'vue';

const content: Ref<string> = ref('');
const imgUrl: Ref<string> = ref('');

function getLoveMessage(): string {
    axios({
        method: 'get',
        url: "https://api.lovelive.tools/api/SweetNothings",
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json, text/plain, text/html, */*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        }
    }).then((response) => {
        console.log(response.data)
        content.value = response.data
    }).catch((error) => {
        console.log(error)
        content.value = '获取情话失败'
    })
    return 'I love you!'
}
// // http://127.0.0.1:5500/img/img48.webp
function getImage(){
    axios({
        method: 'get',
        url: 'https://www.loliapi.com/acg/?type=json',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json, text/plain, text/html, */*'
        }
    }).then((response) => {
        console.log(response.data)
        imgUrl.value = response.data.url
    }).catch((error) => {
        console.log(error)
    })
}

</script>

<template>
    <div>
        <h1 v-text="content"></h1> <br />
        <img class="image" v-bind:src="imgUrl"/> <br />
        <button @click="getLoveMessage()">情话</button> <br />
        <button @click="getImage()">变图片</button> <br />
    </div>
</template>
<style scoped>
.image {
    max-width: 50%;
    height: auto;
}
</style>
