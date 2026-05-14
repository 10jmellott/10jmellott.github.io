<template>
	<div class="app">
		<CoreTreeBackground />
		<CoreHeader class="header" />
		<main>
			<NuxtPage />
		</main>
	</div>
</template>

<style>
	@import url('~/assets/css/main.css');
</style>

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
