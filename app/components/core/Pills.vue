<template>
	<div>
		<CorePill
			v-for="pill in pills"
			:key="pill"
		>
			{{ pill }}
		</CorePill>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		pills: string[];
	}>();
</script>

<style scoped>
	div {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		align-items: center;
	}
</style>
