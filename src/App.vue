<script setup lang="ts">
	import Header from './components/Header.vue';
	import TreeBackground from './components/modules/TreeBackground.vue';
	import RouterView from './components/routing/RouterView.vue';
</script>

<template>
	<div class="app">
		<TreeBackground />
		<Header class="header" />
		<main>
			<RouterView />
		</main>
	</div>
</template>

<style scoped>
	.app {
		display: flex;
		flex-direction: column;
		min-height: calc(100% - var(--padding) * 2);
		height: 100%;
		margin: 0 auto;

		.header {
			position: sticky;
			top: 0;
			z-index: 2;
		}

		main {
			padding: var(--padding);
			margin: auto;
			max-width: var(--site-width);
			z-index: 1;
		}

		@media (width <= 480px) {
			height: auto;
		}
	}
</style>
