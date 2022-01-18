import { createRouter, createWebHashHistory } from "vue-router";

const Login = () => import("@/renderer/views/login");
const Home = () => import("@/renderer/views/home");
const System = () => import("@/renderer/views/system");
const UnloadManage = () => import("@/renderer/views/system/unload/unloadManage");
const UnloadRecord = () => import("@/renderer/views/system/unload/unloadRecord");


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
        component: Home,
        children: [
            {
                path: "",
                component: System
            },
            {
                path: "/system",
                component: System,
                children: [
                    {
                        path: "unloadManage",
                        component: UnloadManage
                    },
                    {
                        path: "unloadRecord",
                        component: UnloadRecord
                    }
                ]
            },
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;