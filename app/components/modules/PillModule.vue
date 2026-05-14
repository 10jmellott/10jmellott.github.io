<template>
	<CoreTitleCard :title>
		<CorePills :pills="pills" />
	</CoreTitleCard>
</template>

<script setup lang="ts">
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
