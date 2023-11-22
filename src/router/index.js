import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'
import LoginPage from '../views/LoginPage.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router