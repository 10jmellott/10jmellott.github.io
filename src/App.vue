<script setup lang="ts">
	import Header from './components/Header.vue';
	import TreeBackground from './components/core/TreeBackground.vue';
</script>

<template>
	<div class="app">
		<Header class="header" />
		<main>
			<transition
				name="slide"
				mode="out-in"
			>
				<router-view />
			</transition>
		</main>
		<TreeBackground />
	</div>
</template>

<style scoped>
	.app {
		display: flex;
		flex-direction: column;
		min-height: calc(100% - var(--padding) * 2);
		max-width: 1280px;
		height: 100%;
		margin: 0 auto;

		.header {
			position: sticky;
			padding: var(--padding);
			top: 0;
			z-index: 1;
		}

		main {
			padding: var(--padding);
			margin: auto;
		}

		@media (width <= 480px) {
			height: auto;

			.header {
				background: var(--background);
				padding: 0 var(--padding);
			}
		}
	}

	/* Slide transition styles */
	.slide-enter-active,
	.slide-leave-active {
		transition:
			transform 0.3s cubic-bezier(0.55, 0, 0.1, 1),
			opacity 0.3s;
	}

	.slide-enter-from {
		transform: translateX(30px);
		opacity: 0;
	}

	.slide-enter-to {
		transform: translateX(0);
		opacity: 1;
	}

	.slide-leave-from {
		transform: translateX(0);
		opacity: 1;
	}

	.slide-leave-to {
		transform: translateX(-30px);
		opacity: 0;
	}
</style>
