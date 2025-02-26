import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedLoaded, Router } from "vue-router"

import Add from "../components/Add.vue"
import Home from "../components/Home.vue"
import Detail from "../components/Detail.vue"
import List from "../components/List.vue"
import Update from "../components/Update.vue"
import HelloWorld from "../components/HelloWorld.vue"

const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/Home", component: Home },
        { path: "/Add", component: Add },
        { path: "/Detail", component: Detail },
        { path: "/List", component: List },
        { path: "/Update", component: Update },
        { path: "/HelloWorld", component: HelloWorld },
    ]
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
    console.log(`beforeEach -> to: ${to.path}, from: ${from.path}`)
    next()
})

router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded) => {
    console.log(`afterEach -> to: ${to.path}, from: ${from.path}`)
})

export default router