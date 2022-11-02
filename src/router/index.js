import { createRouter, createWebHistory } from 'vue-router'
import signin from '@/views/signin.vue'
import signup from '@/views/signup.vue'

const routes = [{
        path: '/',
        name: 'signin',
        component: signin
    },
    {
        path: '/signup',
        name: 'signup',
        component: signup

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router