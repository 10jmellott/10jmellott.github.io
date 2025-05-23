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
		<div
			v-for="project in year.projects"
			:key="project.title"
			class="project-row"
		>
			<ProjectMetaCard :project="project" />
			<ProjectGalleryCard :images="project.images" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import ProjectMetaCard from '../components/modules/ProjectMetaCard.vue';
	import ProjectGalleryCard from '../components/modules/ProjectGalleryCard.vue';
	import HeaderCard from '../components/core/HeaderCard.vue';

	const projects = [
		{
			year: 2025,
			projects: [
				{
					title: 'Personal Website',
					subtitle: 'Portfolio & Resume',
					description:
						'A statically generated site built with Vue 3, TypeScript, and Vite. Hosted on GitHub Pages.',
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
					year: 2025,
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

		@media (width <= 800px) {
			.project-row {
				flex-direction: column;
				gap: 16px;
			}
		}
	}

	.year-title-card {
		margin-left: auto;
	}

	@media (width <= 800px) {
		.project-row {
			flex-direction: column;
			gap: 16px;
		}
	}
</style>
