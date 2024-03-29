import {createRouter, createWebHistory} from 'vue-router'
import Home from '../../views/main/Index.vue'
import Products from '../../views/products/Index.vue'
import Login from "../../views/components/Login.vue";
import Error404 from "../../views/components/errors/Error404.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/logout',
            name: 'logout'
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

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token');

    if (!token) {
        if (to.name === 'login') {
            return next();
        } else {
            return next({name: 'login'});
        }
    } else if (to.name === 'logout') {
        localStorage.removeItem('x_xsrf_token');

        return next({name: 'login'});
    }

    next();
})

export default router
