<template>
	<header>
		<Logo />
		<nav>
			<NavigationButton
				to="/"
				text="Home"
				:icon="faHome"
				selected
			/>
			<NavigationButton
				to="/projects"
				text="Projects"
				:icon="faTerminal"
			/>
			<NavigationButton
				to="/experience"
				text="Experience"
				:icon="faBriefcase"
			/>
		</nav>
	</header>
</template>

<script setup lang="ts">
	import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
	import Logo from './icons/Logo.vue';
	import NavigationButton from './NavigationButton.vue';
	import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
	import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
</script>

<style scoped>
	header {
		display: flex;
		align-items: center;
		gap: var(--padding);

		nav {
			display: flex;
			gap: var(--padding);
			margin-left: auto;
		}
	}
</style>
