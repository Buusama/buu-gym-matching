export default {
    auth: {
        login: "/auth/login",
        logout: "/auth/logout",
    },
    users: {
        list: "/users",
    },
    members: {
        list: "/members",
        create: "/members",
        detail: (id: string) => `/members/${id}`,
        update: (id: string) => `/members/${id}`,
    },
}