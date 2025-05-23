<template>
	<div class="title-card card">
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
</template>

<script setup lang="ts">
	defineProps<{
		title?: string;
		subtitle?: string;
	}>();
</script>

<style scoped>
	.title-card {
		display: flex;
		flex-direction: column;
		gap: var(--padding);

		.subtitle {
			margin-top: 8px;
		}
	}
</style>
