import {createRouter, createWebHistory} from 'vue-router'
import Home from '../../views/main/Index.vue'
import Products from '../../views/products/Index.vue'
import Error404 from "../../views/components/errors/Error404.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/products',
            name: 'products.index',
            component: Products
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: Error404
        },
    ]
})

export default router
