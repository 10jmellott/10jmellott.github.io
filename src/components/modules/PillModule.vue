<template>
	<TitleCard :title>
		<Pills :pills="pills" />
	</TitleCard>
</template>

<script setup lang="ts">
	import Pills from '../core/Pills.vue';
	import TitleCard from '../core/TitleCard.vue';
	defineProps<{
		title: string;
		pills: string[];
	}>();
</script>

<style scoped>
	.container {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		align-items: center;

		p {
			border-radius: 12px;
			padding: 4px 12px;
			font-size: 0.75rem;
			text-transform: lowercase;
			background: var(--accent);
			color: var(--background);
		}
	}
</style>
