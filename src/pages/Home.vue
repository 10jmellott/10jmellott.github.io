<script setup lang="ts">
	import Education from '../components/modules/Education.vue';
	import Experience from '../components/modules/Experience.vue';
	import Interests from '../components/modules/Interests.vue';
	import Skills from '../components/modules/Skills.vue';
	import Technologies from '../components/modules/Technologies.vue';
	import Welcome from '../components/modules/Welcome.vue';
</script>

<template>
	<div class="grid-layout">
		<Welcome class="module welcome" />
		<Interests class="module interests" />
		<Education class="module education" />
		<Technologies class="module technologies" />
		<Experience class="module experience" />
		<Skills class="module skills" />
	</div>
</template>

<style scoped>
	@keyframes fade-in-slide-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.grid-layout {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: var(--padding);
		grid-template-areas:
			'welcome welcome interests'
			'education experience experience'
			'technologies experience experience'
			'skills skills skills';
		position: relative;

		/* Mobile */
		@media (width <= 1024px) {
			grid-template-columns: 1fr;
			grid-template-areas:
				'welcome'
				'interests'
				'education'
				'experience'
				'technologies'
				'skills';
			grid-gap: var(--padding);
		}
	}

	.module {
		opacity: 0;
		animation: fade-in-slide-up 1s forwards;

		p {
			line-height: normal;
		}
	}

	.module:nth-child(1) {
		animation-delay: 0s;
	}

	.module:nth-child(2) {
		animation-delay: 0.25s;
	}

	.module:nth-child(3) {
		animation-delay: 0.5s;
	}

	.module:nth-child(4) {
		animation-delay: 0.75s;
	}

	.module:nth-child(5) {
		animation-delay: 1s;
	}

	.module:nth-child(6) {
		animation-delay: 1.25s;
	}

	.module:nth-child(7) {
		animation-delay: 1.5s;
	}

	.module:nth-child(8) {
		animation-delay: 1.75s;
	}

	.module:nth-child(9) {
		animation-delay: 2s;
	}

	.module:nth-child(10) {
		animation-delay: 2.25s;
	}

	.module:nth-child(11) {
		animation-delay: 2.5s;
	}

	.module:nth-child(12) {
		animation-delay: 2.75s;
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
