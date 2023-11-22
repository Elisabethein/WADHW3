// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../views/Index.vue';
import LoginPage from '../views/LoginPage.vue';
import SignupPage from '../components/SignupPage.vue'; // Import the new signup page

const routes = [
    {
        path: '/',
        name: 'home',
        component: Index,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/signup', // Add a new route for the signup page
        name: 'signup',
        component: SignupPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
