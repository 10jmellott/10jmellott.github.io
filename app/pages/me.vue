<template>
	<div class="grid-layout">
		<ModulesWelcome class="slide-in welcome" />
		<ModulesExperience class="slide-in experience" />
		<ModulesEducation class="slide-in education" />
		<ModulesLatestProject class="slide-in latest-project" />
		<ModulesTechnologies class="slide-in technologies" />
		<ModulesSkills class="slide-in skills" />
		<ModulesInterests class="slide-in interests" />
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
