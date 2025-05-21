<template>
	<div>
		<Pill
			v-for="pill in pills"
			:key="pill"
		>
			{{ pill }}
		</Pill>
	</div>
</template>

<script setup lang="ts">
	import Pill from './Pill.vue';
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
