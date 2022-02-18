import { createRouter, createWebHashHistory } from 'vue-router';

const Login = () => import('@/renderer/views/login');
const Home = () => import('@/renderer/views/home');
const Welcome = () => import('@/renderer/views/welcome');
const Error = () => import('@/renderer/views/404');
const Operating = () => import('@/renderer/views/operating/index');
const System = () => import('@/renderer/views/system');
const UnloadManage = () => import('@/renderer/views/system/unload/unloadManage');
const UnloadRecord = () => import('@/renderer/views/system/unload/unloadRecord');
const Cashier = () => import('@/renderer/views/cashier');

const routes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '',
                redirect: '/operating',
                component: Operating,
            },
            {
                path: '/operating',
                component: Operating,
                meta: {
                    title: '经营状况'
                },
            },
            {
                path: '/cashier',
                component: Cashier,
                meta: {
                    title: '收银业务'
                },
            },
            {
                path: '/fuel-card',
                component: Operating,
            },
            {
                path: '/query-report',
                component: Operating,
            },
            {
                path: '/system',
                component: System,
                meta: {
                    title: '系统设置'
                },
                children: [
                    {
                        path: '',
                        component: Welcome
                    },
                    {
                        path: 'unloadManage',
                        component: UnloadManage,
                        meta: {
                            title: '卸油操作'
                        },
                    },
                    {
                        path: 'unloadRecord',
                        component: UnloadRecord,
                        meta: {
                            title: '卸油记录'
                        },
                    },
                    {
                        path: '*',
                        component: Error,
                        meta: {title: '404'}
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
