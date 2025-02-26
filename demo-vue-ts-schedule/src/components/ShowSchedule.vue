<script setup lang="ts">
import { defineMyUser } from '../store/userStore';
import { onMounted, reactive } from 'vue';
import { defineSchedule } from '../store/scheduleStore';
import Axios from '../utils/request';
import { useToast } from 'vue-toastification';
const toast = useToast()
const sysUser = defineMyUser()
const schedule = defineSchedule()
// 挂载完成后获取数据
onMounted(() => {
    // 发送异步请求
    getAllSchedule()
})
function getAllSchedule(){
    Axios({
        url: '/schedule/findAllSchedule',
        method: 'get',
        params: {
            uid: sysUser.uid
        }
    }).then((response) => {
        console.log("getAllSchedule: ", response.data.data)
        if (response.data.code === 1) {
            Object.assign(schedule.itemList, response.data.data)
        } else {
            alert(`获取日程失败: ${response.data.message}`)
            toast.error('获取日程失败')
        }
    }).catch((error) => {
        alert(`获取日程失败: ${error.message}`)
        toast.error('获取日程失败')
    })
}
const initialSchedule = {
    sid: 0,
    uid: sysUser.uid,
    title: "",
    completed: 0,
}
const addScheduleActive = reactive({...initialSchedule})
function addSchedule(){
    if(!addScheduleActive.title?.trim()){
        toast.warning('请输入日程内容')
        return
    }
    Axios({
        url: '/schedule/addSchedule',
        method: 'post',
        data: addScheduleActive
    }).then((response) => {
        console.log(response.data.data)
        if (response.data.code === 1) {
            getAllSchedule()
            Object.assign(addScheduleActive, initialSchedule)
            toast.success('添加日程成功')
        } else {
            alert(`添加日程失败: ${response.data.message}`)
            toast.error('添加日程失败')
        }
    }).catch((error) => {
        alert(`添加日程失败: ${error.message}`)
        toast.error('添加日程失败')
    })
}
function updateSchedule(index: number){
    Axios({
        url: '/schedule/updateSchedule',
        method: 'post',
        data: schedule.itemList[index]
    }).then((response) => {
        console.log(response.data.data)
        if (response.data.code === 1) {
            getAllSchedule()
            toast.success('修改日程成功')
        } else {
            alert(`修改日程失败: ${response.data.message}`)
            toast.error('修改日程失败')
        }
    }).catch((error) => {
        alert(`修改日程失败: ${error.message}`)
        toast.error('修改日程失败')
    })
}
function deleteSchedule(index: number){
    Axios({
        url: '/schedule/deleteSchedule',
        method: 'get',
        params: {
            sid: schedule.itemList[index].sid
        }
    }).then((response) => {
        console.log(response.data.data)
        if (response.data.code === 1) {
            schedule.itemList.splice(index, 1)
            toast.success('删除日程成功')
        } else {
            alert(`删除日程失败: ${response.data.message}`)
            toast.error('删除日程失败')
        }
    }).catch((error) => {
        alert(`删除日程失败: ${error.message}`)
        toast.error('删除日程失败')
    })
}
</script>

<template>
    <div>
        <h3 class="title">您的日程如下</h3>
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>内容</th>
                    <th>进度</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in schedule.itemList" v-bind:key="index">
                    <td v-text="index + 1"></td>
                    <td>
                        <input id="title" type="text" name="title" v-model="item.title">
                    </td>
                    <td>
                        <input id="success" type="radio" value="1" v-model="item.completed">
                        <label for="success">已完成</label>
                        <input id="failure" type="radio" value="0" v-model="item.completed">
                        <label for="failure">未完成</label>
                    </td>
                    <td>
                        <button class="signIn" @click="deleteSchedule(index)">删除</button>
                        <button class="signIn" @click="updateSchedule(index)">保存修改</button>
                    </td>
                </tr>
                <tr>
                    <td>😊</td>
                    <td>
                        <input id="title" type="text" name="title" v-model="addScheduleActive.title">
                    </td>
                    <td>
                        <input id="success" type="radio" value="1" v-model="addScheduleActive.completed">
                        <label for="success">已完成</label>
                        <input id="failure" type="radio" value="0" v-model="addScheduleActive.completed">
                        <label for="failure">未完成</label>
                    </td>
                    <td>
                        <button class="addSchedule" @click="addSchedule()">添加日程</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    .title {
        color: rgb(24, 231, 21);
        text-align: center;
        font-family: 幼圆, 'Times New Roman', Times, serif;
    }

    table {
        background-color: aliceblue;
        border-left: 1px solid powderblue;
        border-top: 1px solid powderblue;
        border-spacing: 0px;
        text-align: center;
        margin: auto;
    }

    td,
    th {
        height: 40px;
        border-right: 1px solid powderblue;
        border-bottom: 1px solid powderblue;
    }

    a {
        text-decoration: none;
    }
</style>
