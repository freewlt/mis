import { createRouter, createWebHashHistory } from "vue-router";

const Login = () => import("@/renderer/views/login");
const Home = () => import("@/renderer/views/home");


const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/home",
        name: "home",
        component: Home
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;