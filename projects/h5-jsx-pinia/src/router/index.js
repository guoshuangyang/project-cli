import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    {
        path: '/',
        name: 'hello world',
        component: () => import("../pages/home")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router