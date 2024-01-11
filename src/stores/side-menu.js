import { defineStore } from 'pinia'

export const useSideMenuStore = defineStore('sideMenu', {
  state: () => ({
    menu: [
      {
        icon: 'HomeIcon',
        pageName: 'dashboard',
        title: 'Home',
      },
      'devider',
      {
        icon: 'UsersIcon',
        title: 'Huấn luyện viên',
        subMenu: [
          {
            icon: '',
            pageName: 'create-trainer',
            title: 'Thêm huấn luyện viên',
          },
          {
            icon: '',
            pageName: 'list-trainers',
            title: 'Danh sách huấn luyện viên',
            path: '/trainers',
          },
        ],
      },
      {
        icon: 'UserIcon',
        title: 'Hội Viên',
        subMenu: [
          {
            icon: '',
            pageName: 'create-member',
            title: 'Thêm hội viên',
          },
          {
            icon: '',
            pageName: 'list-members',
            title: 'Danh sách hội viên',
            path: '/members',
          },
          {
            icon: '',
            pageName: 'checkin-history',
            title: 'Lịch sử checkin',
          },
        ],
      },
      {
        icon: 'PackageIcon',
        title: 'Gói tập',
        subMenu: [
          {
            icon: '',
            pageName: 'create-package',
            title: 'Thêm gói tập',
          },
          {
            icon: '',
            pageName: 'list-packages',
            title: 'Danh sách gói tập',
            path: '/packages',
          },
        ],
      },
      'devider',
      {
        icon: 'UsersIcon',
        title: 'Thống kê, Báo cáo',
        subMenu: [
          {
            icon: '',
            pageName: 'list-users',
            title: 'Thống kê doanh thu',
            path: '/users',
          },
          {
            icon: '',
            pageName: 'list-users',
            title: 'Báo cáo doanh thu',
            path: '/users',
          },
        ],
      },
      'devider',
      {
        icon: 'UsersIcon',
        title: 'Quản trị viên',
        pageName: 'list-users',
        path: '/users',
      },
    ],
  }),
})
