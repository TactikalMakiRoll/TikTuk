import Trending from "@/pages/Trending"
import UserPage from "@/pages/UserPage"
import ErrorPage from "@/pages/ErrorPage"
import {createRouter, createWebHistory} from "vue-router";

// создаём vue-router с компонентами, соответствующими нужным нам адресам приложения
const routes = [
    {
        path:'/',
        component: Trending
    },
    {
        path:'/users/:name',
        name: 'user',
        component: UserPage
    },
    {
        path:'/error',
        component: ErrorPage
    },
    {
        path:'/users/error',
        component: ErrorPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;