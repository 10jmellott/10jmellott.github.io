<script setup lang="ts">
	import Placeholder from './components/Placeholder.vue';
</script>

<template>
	<div class="grid-layout">
		<Placeholder class="module navigation">Navigation</Placeholder>
		<Placeholder class="module welcome">Welcome</Placeholder>
		<Placeholder class="module socials">Socials</Placeholder>
		<Placeholder class="module experience">Latest Experience</Placeholder>
		<Placeholder class="module skills">Skills</Placeholder>
		<Placeholder class="module projects">Latest Project</Placeholder>
		<Placeholder class="module education">Education</Placeholder>
		<Placeholder class="module weather">Weather Module</Placeholder>
		<Placeholder class="module footer">Footer</Placeholder>
	</div>
</template>

<style scoped>
	.grid-layout {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: var(--padding);
		grid-template-areas:
			'navigation navigation navigation'
			'welcome welcome socials'
			'welcome welcome experience'
			'skills projects projects'
			'skills projects projects'
			'education education weather'
			'footer footer footer';

		.module {
			text-align: center;
		}

		.navigation {
			grid-area: navigation;
		}

		.welcome {
			grid-area: welcome;
		}

		.socials {
			grid-area: socials;
		}

		.experience {
			grid-area: experience;
		}

		.skills {
			grid-area: skills;
		}

		.projects {
			grid-area: projects;
		}

		.education {
			grid-area: education;
		}

		.weather {
			grid-area: weather;
		}

		.footer {
			grid-area: footer;
		}
	}
</style>
