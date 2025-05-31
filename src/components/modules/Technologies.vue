<template>
	<PillModule
		title="📜Technologies"
		:pills
	/>
</template>

<script setup lang="ts">
	import PillModule from './PillModule.vue';
	const pills = [
		'Web Development',
		'Typescript',
		'Vue.js',
		'ASP.NET',
		'C#',
		'Python',
	];
</script>
