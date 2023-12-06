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
            pageName: 'list-packages',
            title: 'Danh sách gói tập',
            path: '/packages',
          },
        ],
      },
      {
        icon: 'UsersIcon',
        title: 'Quản trị viên',
        pageName: 'list-users',
        path: '/users',
      }
    ],
  }),
})
