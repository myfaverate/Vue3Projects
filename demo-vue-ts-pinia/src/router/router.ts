import { createRouter, createWebHistory, Router } from "vue-router";
import List from "../components/List.vue";
import Operate from "../components/Operate.vue";

const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Operate },
        { path: "/operate", component: Operate },
        { path: "/list", component: List },
    ]
})

export default router