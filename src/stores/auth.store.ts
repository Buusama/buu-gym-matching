import { defineStore } from 'pinia';
import { postLogin } from "@/api/auth";
import router from "@/router";
import { LoginRequest } from "@/api/auth/interfaces/login";


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: localStorage.getItem('token'),
        returnUrl: null
    }),
    actions: {
        async login(request: LoginRequest) {
            const response = await postLogin(request);

            this.token = response.access_token;

            localStorage.setItem('token', response.access_token);

            router.push({ name: "home" });
        },
        logout() {
            this.token = null;
            localStorage.removeItem('token');
            router.push({ name: "login" });
        },
    },
});
