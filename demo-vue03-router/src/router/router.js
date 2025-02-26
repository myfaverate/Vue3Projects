// 创建路由对象需要使用的函数
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Add from '../components/Add.vue'
import List from '../components/List.vue'
import Update from '../components/Update.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home", component: Home },
        { path: "/add", component: Add },
        { path: "/list", component: List },
        { path: "/update", component: Update },
        { path: "/showAll", redirect: "/list" },
    ]
})

export default router