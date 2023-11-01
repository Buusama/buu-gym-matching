import Login from '@/views/login/Login.vue';
import Home from '@/views/home/Home.vue';
import ErrorPage from '@/views/error-page/ErrorPage.vue';
import SideMenu from "@/layouts/side-menu/Main.vue";
const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login,
    },
    {
        name: 'home',
        path: '/',
        component: SideMenu,
        children: [
            {
                path: "/haha",
                name: "side-menu-page-1",
                component: Home,
            },
            {
                path: "/chat",
                name: "side-menu-page-2",
                component: Home,
            },
            {
                path: "/chat/a",
                name: "side-menu-page-2-1",
                component: Home,
            },
            {
                path: "/chat/b",
                name: "side-menu-page-2-2",
                component: Home,
            },
            {
                path: "/chat/c",
                name: "side-menu-page-2-3",
                component: Home,
            },          
        ],
    },
    {
        name: 'errors.404',
        path: '/404',
        component: ErrorPage,
    },
    {
        path: "/:pathMatch(.*)*",
        component: ErrorPage,
    },
];

export default routes;
