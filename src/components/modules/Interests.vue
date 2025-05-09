<template>
	<PillModule
		title="🎲Interests"
		:pills
	/>
</template>

<script setup lang="ts">
	import PillModule from './PillModule.vue';
	const pills = [
		'IoT Projects',
		'Home Lab Projects',
		'Magic: The Gathering Deck Building',
	];
</script>
