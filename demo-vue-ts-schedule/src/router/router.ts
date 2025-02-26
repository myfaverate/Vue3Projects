import { createRouter, createWebHistory, Router } from "vue-router"
import Login from "../components/Login.vue"
import Header from "../components/Header.vue"
import Register from "../components/Register.vue"
import ShowSchedule from "../components/ShowSchedule.vue"
import { defineMyUser, useStore } from "../store/userStore"
const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Login },
        { path: "/login", component: Login },
        { path: "/register", component: Register },
        { path: "/showSchedule", component: ShowSchedule },
        { path: "/header", component: Header }
    ]
})
// 路由全局前置守卫
router.beforeEach((to, _from, next) => {
    // TODO 很重要不可以在全局使用 defineMyUser()，因为这样会导致每次调用都会创建一个新的实例
    const sysUser = defineMyUser()
    const store = useStore()
    console.log(sysUser.$id)
    console.log(store.$id)
    if (to.path == "/showSchedule") {
        if(sysUser.username == "") {
            next("/login")
        }else{
            next()
        }
    } else {
        next()
    }
})
export default router