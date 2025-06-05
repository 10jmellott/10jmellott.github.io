// mouse.js
import Home from '../pages/Home.vue';
import Me from '../pages/Me.vue';
import Projects from '../pages/Projects.vue';
import Experience from '../pages/Experience.vue';
import { Ref, ref, Component, markRaw } from 'vue';

// by convention, composable function names start with "use"
export function useRouter() {
	return new Router({
		'': Home,
		me: Me,
		projects: Projects,
		experience: Experience,
	});
}

class Router {
	route: Ref<string>;
	component: Ref<Component | null> = ref(null);
	routes: { [key: string]: Component };

	constructor(routes: { [key: string]: Component }) {
		this.route = ref('');
		this.routes = routes;
		this.updateRoute();
		window.addEventListener('hashchange', this.updateRoute.bind(this));
	}

	navigate(path: string) {
		window.location.hash = path;
	}

	private updateRoute() {
		const hash = window.location.hash.slice(1); // Remove the leading '#'
		this.route.value = hash;
		const componentValue = this.routes[this.route.value] || this.routes[''];
		this.component.value = componentValue ? markRaw(componentValue) : null;
	}
}
