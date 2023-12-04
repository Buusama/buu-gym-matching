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
            pageName: 'list-members',
            title: 'Danh sách hội viên',
            path: '/members'
          },
          {
            icon: '',
            pageName: 'checkin-history',
            title: 'Lịch sử checkin',
          },
          {
            icon: '',
            pageName: 'create-member',
            title: 'Thêm mới hội viên',
          },
        ],
      },
    ],
  }),
})
