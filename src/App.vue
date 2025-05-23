<script setup lang="ts">
	import Header from './components/Header.vue';
	import TreeBackground from './components/core/TreeBackground.vue';
</script>

<template>
	<div class="app">
		<Header class="header" />
		<main>
			<router-view />
		</main>
		<TreeBackground />
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
			z-index: 1;
		}

		main {
			padding: var(--padding);
			margin: auto;
			max-width: var(--site-width);
		}

		@media (width <= 480px) {
			height: auto;
		}
	}
</style>
