export default {
  auth: {
    login: '/auth/login',
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
}
