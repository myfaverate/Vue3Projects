<script setup lang="ts">
import { reactive, ref, Ref } from 'vue';
import { User } from '../bean/User';
import Axios from '../utils/request';
import router from '../router/router';
import { defineMyUser } from '../store/userStore';
import { ElMessageBox } from 'element-plus';
const sysUser = defineMyUser()
const initUser: User = new User('','')
const user = reactive(new User('',''))
const usernameNote: Ref<string> = ref('')
const passwordNote: Ref<string> = ref("")
function checkUsername(): boolean {
    const usernameRegex: RegExp = /^[\w\u3400-\u4dbf\u4e00-\u9fff]{5,10}$/
    if (!usernameRegex.test(user.username)) {
        usernameNote.value = '用户名格式错误'
        return false
    } else {
        usernameNote.value = 'OK'
        return true
    }
}
function checkPassword(): boolean {
    const passwordRegex: RegExp = /^[a-zA-Z0-9]{6,12}$/
    if (!passwordRegex.test(user.password)) {
        passwordNote.value = '密码格式错误'
        return false
    } else {
        passwordNote.value = 'OK'
        return true
    }
}
function login(): void {
    if (checkUsername() && checkPassword()) {
        Axios({
            url: '/user/login',
            method: 'post',
            data: user,
        }).then((response) => {
            console.log(response.data.data)
            console.log(sysUser.$state)
            if (response.data.code === 1) {
                ElMessageBox.alert('登录成功', '提示', {
                    confirmButtonText: '确定',
                });
                Object.assign(sysUser, response.data.data)
                router.push('/showSchedule')
            } else {
                alert(`登录失败: ${response.data.message}`)
            }
        }).catch((error) => {
            alert(`登录失败: ${error.message}`)
        })
    }else{
        alert('请检查输入')
    }
}
// Java Web 174
</script>

<template>
    {{ user }}
    <h3 class="title">请登录</h3>
    <table>
        <tbody>
            <tr>
                <td>请输入账号</td>
                <td>
                    <input id="username" type="text" name="username" v-model="user.username" @blur="checkUsername()">
                    <span class="usernameNote" v-text="usernameNote"></span>
                </td>
            </tr>
            <tr>
                <td>请输入密码</td>
                <td>
                    <input id="password" type="password" v-model="user.password" @blur="checkPassword()">
                    <span class="passwordNote" v-text="passwordNote"></span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <el-button type="primary" @click="login()">登录</el-button>
                    <el-button type="primary" @click="Object.assign(user, initUser)" >重置</el-button>
                </td>
            </tr>
        </tbody>
    </table>
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

    td {
        height: 40px;
        border-right: 1px solid powderblue;
        border-bottom: 1px solid powderblue;
    }

    a {
        text-decoration: none;
    }
</style>
