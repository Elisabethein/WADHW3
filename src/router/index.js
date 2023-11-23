// Import Vue and Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import IndexPage from '@/views/Index.vue';
import LoginPage from '@/views/LoginPage.vue';

// Create a new router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            component: IndexPage,
        },
        {
            path: '/login',
            component: LoginPage,
        },
        // Add more routes as needed
    ],
});

// Export the router instance
export default router;
