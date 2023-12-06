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
    name: 'home',
    path: '/',
    component: SideMenu,
    meta: { requiresAuth: true, title: 'Trang chủ' },
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: Home,
        meta: { requiresAuth: true, title: 'Dashboard' },
      },
      {
        path: '/members',
        name: 'members',
        meta: { requiresAuth: true, title: 'Hội viên' },
        children: [
          {
            path: '',
            name: 'list-members',
            component: Member,
            meta: { requiresAuth: true, title: 'Danh sách hội viên' },
          },
          {
            path: 'create',
            children: [
              {
                path: '',
                name: 'create-member',
                component: MemberCreate,
                meta: { requiresAuth: true, title: 'Thêm hội viên' },
              }
            ]
          },
          {
            path: 'checkin',
            children: [
              {
                path: '',
                name: 'checkin-history',
                component: Home,
                meta: { requiresAuth: true, title: 'Lịch sử checkin' },
              },
            ],
          },
          {
            path: ':id/edit',
            name: 'edit-member',
            component: MemberEdit,
            meta: { requiresAuth: true, title: 'Chỉnh sửa hội viên' },
          },
        ],
      },
      {
        path: '/packages',
        name: 'packages',
        meta: { requiresAuth: true, title: 'Gói tập' },
        children: [
          {
            path: '',
            name: 'list-packages',
            component: () => import('@/views/package/List.vue'),
            meta: { requiresAuth: true, title: 'Danh sách gói tập' },
          },
          {
            path: ':id/edit',
            name: 'edit-package',
            component: () => import('@/views/package/Edit.vue'),
            meta: { requiresAuth: true, title: 'Chỉnh sửa gói tập' },
          },
          {
            path: 'create',
            name: 'create-package',
            component: () => import('@/views/package/Create.vue'),
            meta: { requiresAuth: true, title: 'Thêm gói tập' },
          },
         
        ],
      },
      {
        path: '/users',
        name: 'users',
        meta: { requiresAuth: true, title: 'Người dùng' },
        children: [
          {
            path: '',
            name: 'list-users',
            component: () => import('@/views/user/List.vue'),
            meta: { requiresAuth: true, title: 'Danh sách người dùng' },
            children: [
              {
                path: 'create',
                name: 'create-user',
                component: () => import('@/views/user/Create.vue'),
                meta: { requiresAuth: true, title: 'Thêm người dùng' },
              },
            ],
          },

        ],
      }
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
