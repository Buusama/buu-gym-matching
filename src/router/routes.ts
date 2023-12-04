import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
import ErrorPage from '@/views/error-page/ErrorPage.vue'
import Member from '@/views/member/List.vue'
import MemberCreate from '@/views/member/Create.vue'
import MemberEdit from '@/views/member/Edit.vue'
import SideMenu from '@/layouts/side-menu/Main.vue'
const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    path: '/members',
    component: SideMenu,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'list-members',
        component: Member,
      },
      {
        path: 'create',
        name: 'create-member',
        component: MemberCreate,
      },
      {
        path: 'checkin',
        name: 'checkin-history',
        component: Home,
      },
      {
        path: ':id/edit',
        name: 'edit-member',
        component: MemberEdit,
      },
    ],
  },
  {
    name: 'home',
    path: '/',
    component: SideMenu,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'dashboard',
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
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
  },
]

export default routes
