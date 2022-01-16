import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component: import("../pages/index")
    },
    {
        path: '/page2',
        name: 'page2',
        component: import("../pages/page2")
    }
]

const router  = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

