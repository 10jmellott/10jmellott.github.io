<template>
	<div
		v-for="year in projects"
		:key="year.year"
		class="year-section"
	>
		<HeaderCard
			:title="`${year.year}`"
			class="year-title-card"
		/>
		<ProjectMetaCard
			v-for="project in year.projects"
			:key="project.title"
			:project
		/>
	</div>
</template>

<script setup lang="ts">
	import ProjectMetaCard from '../components/modules/ProjectMetaCard.vue';
	import HeaderCard from '../components/core/HeaderCard.vue';

	const projects = [
		{
			year: 2025,
			projects: [
				{
					title: 'Personal Website',
					subtitle: 'Portfolio & Resume',
					description:
						'<b>Developed and designed</b> this personal website as a static web application, optimizing performance and reliability. Hosted via <b>GitHub Pages</b> for seamless deployment and accessibility. Finally the domain is provided by <b>Cloudflare</b>, ensuring a fast and secure experience.',
					technologies: [
						'Vue.js',
						'TypeScript',
						'Vite',
						'GitHub Pages',
						'Cloudflare',
					],
					code: 'https://github.com/10jmellott/10jmellott.github.io',
					website: 'https://mellott-lillie.com',
					images: ['/latest-project.webp'],
				},
			],
		},
		// Add more projects here...
	];
</script>

<style scoped>
	.projects-page {
		display: flex;
		flex-direction: column;
	}

	.project-row {
		display: flex;
		gap: var(--padding);
	}

	.year-section {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
	}

	.year-title-card {
		margin-left: auto;
	}
</style>
