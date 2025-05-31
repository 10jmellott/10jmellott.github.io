<template>
	<div class="title-card card">
		<div class="title-card-content">
			<div v-if="title || subtitle">
				<h2 class="title">{{ title }}</h2>
				<p
					class="subtitle"
					v-if="subtitle"
				>
					{{ subtitle }}
				</p>
			</div>
			<slot></slot>
		</div>
		<img
			v-if="image"
			:src="image"
			:alt="title + ' image'"
			class="title-card-image"
		/>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		title?: string;
		subtitle?: string;
		image?: string;
	}>();
</script>

<style scoped>
	.title-card {
		display: flex;
		flex-direction: row;
		gap: var(--padding);
		align-items: stretch;
	}

	.title-card-content {
		flex: 1 1 0;
		display: flex;
		flex-direction: column;
		gap: var(--padding);
	}

	.title-card-image {
		max-width: 320px;
		border-radius: 0 var(--border-radius) var(--border-radius) 0;
		margin: calc(-1 * var(--padding));
		object-fit: cover;
		margin-left: var(--padding);
	}

	.subtitle {
		margin-top: 8px;
	}

	@media (width <= 800px) {
		.title-card {
			flex-direction: column;
		}

		.title-card-image {
			max-width: none;
			width: calc(100% + 2 * var(--padding));
			max-height: 320px;
			border-radius: 0 0 var(--border-radius) var(--border-radius);
			margin-top: 0;
			margin-left: calc(-1 * var(--padding));
			margin-right: calc(-1 * var(--padding));
		}
	}
</style>
