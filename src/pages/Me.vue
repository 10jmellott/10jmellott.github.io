<script setup lang="ts">
	import Education from '../components/modules/Education.vue';
	import Experience from '../components/modules/Experience.vue';
	import Interests from '../components/modules/Interests.vue';
	import LatestProject from '../components/modules/LatestProject.vue';
	import Skills from '../components/modules/Skills.vue';
	import Technologies from '../components/modules/Technologies.vue';
	import Welcome from '../components/modules/Welcome.vue';
</script>

<template>
	<div class="grid-layout">
		<Welcome class="slide-in welcome" />
		<Experience class="slide-in experience" />
		<Education class="slide-in education" />
		<LatestProject class="slide-in latest-project" />
		<Technologies class="slide-in technologies" />
		<Skills class="slide-in skills" />
		<Interests class="slide-in interests" />
	</div>
</template>

<style scoped>
	.grid-layout {
		display: grid;
		grid-template-columns: 1fr 0.5fr 1fr;
		grid-gap: var(--padding);
		grid-template-areas:
			'welcome welcome experience'
			'education latest-project latest-project'
			'technologies latest-project latest-project'
			'skills skills interests';
		scroll-margin-top: calc(80px + var(--padding));

		/* Mobile */
		@media (width <= 1024px) {
			grid-template-columns: 1fr;
			grid-template-areas:
				'welcome'
				'experience'
				'education'
				'latest-project'
				'technologies'
				'skills'
				'interests';
			grid-gap: var(--padding);
			margin-bottom: var(--padding);
		}
	}

	.welcome {
		grid-area: welcome;
	}

	.latest-project {
		grid-area: latest-project;
	}

	.experience {
		grid-area: experience;
	}

	.skills {
		grid-area: skills;
	}

	.technologies {
		grid-area: technologies;
	}

	.interests {
		grid-area: interests;
	}

	.education {
		grid-area: education;
	}
</style>
