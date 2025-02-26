<script setup lang="ts">
import { reactive, ref, Ref } from 'vue';
import Axios from '../utils/request';
import router from '../router/router';
const user = reactive({
    username: '',
    password: '',
})
const rePassword: Ref<string> = ref('')
const usernameNote: Ref<string> = ref('')
const passwordNote: Ref<string> = ref("")
const confirmPasswordNote: Ref<string> = ref("")
async function checkUsername(): Promise<boolean> {
    if(!user.username?.trim()){
        usernameNote.value = '用户名不能为空'
        return false
    }
    const usernameRegex: RegExp = /^[\w\u3400-\u4dbf\u4e00-\u9fff]{5,10}$/
    if (!usernameRegex.test(user.username)) {
        usernameNote.value = '用户名格式错误'
        return false
    }
    const response = await Axios({
        url: '/user/checkUsernameUsed',
        method: 'post',
        data: {
            username: user.username
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    if (response.data.code === 0) {
        usernameNote.value = '用户名已被使用'
        return false
    }
    usernameNote.value = 'OK'
    return true
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
function checkConfirmPassword(): boolean {
     const passwordRegex: RegExp = /^[a-zA-Z0-9]{6,12}$/
    if (!passwordRegex.test(rePassword.value)) {
        confirmPasswordNote.value = '密码格式错误'
        return false
    } 
    if (user.password !== rePassword.value) {
        confirmPasswordNote.value = '两次密码不一致'
        return false
    } else {
        confirmPasswordNote.value = 'OK'
        return true
    }
}
async function register(){
    const isSucceed: Boolean = await checkUsername()
    if(isSucceed && checkPassword() && checkConfirmPassword()){
        Axios({
            url: '/user/register',
            method: 'post',
            data: user
        }).then(response => {
            console.log(response)
            if(response.data.code === 1){
                alert('注册成功')
                router.push('/login')
            }else{
                alert(`注册失败: ${response.data.message}`)
            }
        }).catch(error => {
            console.log(error)
            alert(`注册失败: ${error.message}`)
        })
    }else{
        alert('注册失败')
    }
}
</script>

<template>
    {{ user }}
    <h3 class="title">请注册</h3>
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
                <td>请确认密码</td>
                <td>
                    <input id="confirmPassword" type="password" v-model="rePassword" @blur="checkConfirmPassword()">
                    <span class="confirmPasswordNote" v-text="confirmPasswordNote"></span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input class="register" type="button" value="注册" @click="register()"/>
                    <input class="reset" type="button" value="重置" />
                    <button class="signIn">去登录</button>
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
