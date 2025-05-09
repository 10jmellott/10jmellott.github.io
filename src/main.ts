import { createApp } from 'vue';
import './styles/main.css';
import App from './App.vue';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Experience from './pages/Experience.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{ path: '/', component: Home },
	{ path: '/projects', component: Projects },
	{ path: '/experience', component: Experience },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

createApp(App).use(router).mount('#app');
