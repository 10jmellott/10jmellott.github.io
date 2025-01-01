<template>
	<TitleCard
		title="✨Skills"
		subtitle="Free buzzwords here!"
		class="skills-module"
	>
		<div class="container">
			<p
				v-for="skill in skills"
				:key="skill.name"
				:style="{ fontSize: `${skill.value}rem` }"
			>
				{{ skill.name }}
			</p>
		</div>
	</TitleCard>
</template>

<script setup lang="ts">
	import TitleCard from '../TitleCard.vue';
	const skills = [
		{ name: 'Web Dev', value: 1.5 },
		{ name: 'Desktop App Dev', value: 0.8 },
		{ name: 'Architecture', value: 1.2 },
		{ name: 'Profitable Engineering', value: 0.7 },
		{ name: 'Developer Experience', value: 1 },
	];
</script>

<style scoped>
	.container {
		display: flex;
		gap: var(--padding);
		flex-wrap: wrap;
		align-items: center;
	}
</style>
