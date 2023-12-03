import { createRouter, createWebHistory, RouteRecordName } from 'vue-router'
import routes from '@/router/routes'

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const nonAuthRoutes: Array<RouteRecordName | null | undefined> = ['login']

router.beforeEach(async (to, from, next) => {
    if (nonAuthRoutes.includes(to.name)) {
        if (localStorage.getItem('token')) {
            return next('/')
        }
    } else {
        if (!localStorage.getItem('token')) {
            return next('/login')
        }
    }

    return next()
})

export default router
