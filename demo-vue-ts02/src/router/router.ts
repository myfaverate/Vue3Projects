import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/home", component: Home },
        { path: "/login", component: Login }
    ]
})

router.beforeEach((to, from, next) => { 
    console.log(`beforeEach -> to: ${to.path}, from: ${from.path}`)
    if (to.path === "/login") {
        next()
    }else{
        if(window.sessionStorage.getItem("username") == null){
            next("/login")
        }else{
            next()
        }
    }
})

export default router