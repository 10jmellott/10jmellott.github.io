import { createApp } from 'vue';
import './styles/main.css';
import App from './App.vue';
import Home from './pages/Home.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{ path: '/', component: Home },
	{ path: '/me', component: () => import('./pages/Me.vue') },
	{ path: '/projects', component: () => import('./pages/Projects.vue') },
	{ path: '/experience', component: () => import('./pages/Experience.vue') },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

createApp(App).use(router).mount('#app');
