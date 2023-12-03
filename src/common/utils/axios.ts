import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import config from '@/config'
import { showMessage } from '@/common/utils/helpers'
import { useAuthStore } from '@/stores/auth.store'
import router from '@/router'

const api = axios.create({
    baseURL: config.VITE_BASE_API,
    proxy: false,
    responseType: 'json',
})

api.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
        const newConfig: AxiosRequestConfig = { ...config }

        if (localStorage.getItem('token')) {
            const authHeader = {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
            newConfig.headers = { ...config.headers, ...authHeader }
        }

        return newConfig
    }
)

api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response) {
            const message = (error as any).response.data.message
            showMessage(message, false)
            if (error.response.status === 400) {
                const object: { [key: string]: any } = {}
                for (let itemObject of error.response.data.message) {
                    for (let property in itemObject) {
                        object[property] = []
                        for (let validator in itemObject[property]) {
                            object[property].push(itemObject[property][validator])
                        }
                    }
                }
                return {
                    error: true,
                    errorMessages: object
                }
            }
            else if (error.response.status === 401) {
                useAuthStore().logout()
                return {
                    error: true,
                    errorMessages: null
                }
            }
            else if (error.response.status === 404) {
                router.push({ name: 'errors.404' })
                return null
            }
        }
        return Promise.reject(error)
    }
)

export default api
