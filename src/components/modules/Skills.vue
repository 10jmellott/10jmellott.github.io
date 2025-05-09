<template>
	<PillModule
		title="✨Skills"
		:pills
	/>
</template>

<script setup lang="ts">
	import PillModule from './PillModule.vue';
	const pills = [
		'Application Design',
		'Innovation Strategies',
		'Full Stack Development',
		'UI/UX Design',
		'Software Development Life Cycle (SDLC)',
		'Cloud Computing',
		'Project Management',
	];
</script>
