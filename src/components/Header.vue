<template>
	<header class="glass">
		<router-link
			to="/"
			aria-label="Home"
		>
			<Logo />
		</router-link>
		<nav>
			<NavigationButton
				to="/"
				text="Home"
				:icon="faHome"
				selected
			/>
			<NavigationButton
				to="/me"
				text="Me"
				:icon="faIdCard"
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
	import NavigationButton from './core/NavigationButton.vue';
	import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
	import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
	import { faIdCard } from '@fortawesome/free-solid-svg-icons/faIdCard';
</script>

<style scoped>
	header {
		display: flex;
		align-items: center;
		gap: var(--padding);
		background: rgba(var(--background-values), 0.8);
		padding: calc(var(--padding) / 2) var(--padding);
		justify-content: space-between;

		nav {
			display: flex;
			gap: var(--padding);
			margin-left: auto;

			@media (width < 425px) {
				gap: 0;

				:first-child {
					display: none;
				}
			}
		}
	}
</style>
