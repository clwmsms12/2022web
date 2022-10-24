import {createRouter,createWebHistory} from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import ProductView from '@/components/ProductView.vue'


const routes = [
    {
        path:'/',
        name:'home',
        component:HomeView
    },
    {
        path:'/product/:product',
        name:'product',
        component:ProductView
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router