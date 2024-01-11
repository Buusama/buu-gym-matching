export default {
  auth: {
    login: '/auth/matching/login',
    logout: '/auth/logout',
  },
  users: {
    list: '/users',
  },
  members: {
    list: '/members',
    create: '/members',
    detail: (id: string) => `/members/${id}`,
    update: (id: string) => `/members/${id}`,
    delete: (id: string) => `/members/${id}`,
  },
  packages: {
    list: '/packages',
    create: '/packages',
    detail: (id: string) => `/packages/${id}`,
    update: (id: string) => `/packages/${id}`,
    delete: (id: string) => `/packages/${id}`,
  },
  trainers: {
    list: '/trainers',
    create: '/trainers',
    detail: (id: string) => `/trainers/${id}`,
    update: (id: string) => `/trainers/${id}`,
    delete: (id: string) => `/trainers/${id}`,
  },
}
