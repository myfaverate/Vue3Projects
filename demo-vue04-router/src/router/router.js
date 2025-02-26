import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Add from '../components/Add.vue'
import List from '../components/List.vue'
import Update from '../components/Update.vue'
import Detail from '../components/Detail.vue'
import KVDetail from '../components/KVDetail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home", component: Home },
        { path: "/add", component: Add },
        { path: "/list", component: List },
        { path: "/update", component: Update },
        { path: "/detail/:id/:language", component: Detail },
        { path: "/kvDetail", component: KVDetail },
    ]
})

export default router