<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import Education from '../components/modules/Education.vue';
	import Experience from '../components/modules/Experience.vue';
	import Interests from '../components/modules/Interests.vue';
	import LatestProject from '../components/modules/LatestProject.vue';
	import Skills from '../components/modules/Skills.vue';
	import Technologies from '../components/modules/Technologies.vue';
	import Welcome from '../components/modules/Welcome.vue';

	/* Control floating text and grid visibility */
	const showFloatingText = ref(true);

	onMounted(() => {
		setTimeout(() => {
			showFloatingText.value = false;
		}, 3000);
	});
</script>

<template>
	<Transition name="fade">
		<div
			v-if="showFloatingText"
			class="floating-text"
		>
			<p class="floating-text-title">Joshua Mellott-Lillie</p>
			<p class="floating-text-subtitle">Director, Web Technology</p>
		</div>
	</Transition>
	<div
		v-if="!showFloatingText"
		class="grid-layout"
	>
		<Welcome class="module welcome" />
		<Experience class="module experience" />
		<Education class="module education" />
		<LatestProject class="module latest-project" />
		<Technologies class="module technologies" />
		<Skills class="module skills" />
		<Interests class="module interests" />
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

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.floating-text {
		position: fixed;
		top: 30%;
		left: 40%;
		text-align: right;
		font-weight: 100;
		line-height: 1.2;
		text-transform: uppercase;

		.floating-text-title {
			font-size: 4vw;
		}

		.floating-text-subtitle {
			font-size: 2vw;
		}

		@media (width <= 1024px) {
			top: 20%;
			left: 1rem;
			right: 1rem;

			.floating-text-title {
				font-size: 40px;
			}

			.floating-text-subtitle {
				font-size: 20px;
			}
		}
	}

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

	.module {
		opacity: 0;
		animation: fade-in-slide-up 1s forwards;

		p {
			line-height: normal;
		}
	}

	.module:nth-child(1) {
		animation-delay: 0.5s;
	}

	.module:nth-child(2) {
		animation-delay: 0.75s;
	}

	.module:nth-child(3) {
		animation-delay: 1s;
	}

	.module:nth-child(4) {
		animation-delay: 1.25s;
	}

	.module:nth-child(5) {
		animation-delay: 1.5s;
	}

	.module:nth-child(6) {
		animation-delay: 1.75s;
	}

	.module:nth-child(7) {
		animation-delay: 2s;
	}

	.module:nth-child(8) {
		animation-delay: 2.25s;
	}

	.module:nth-child(9) {
		animation-delay: 2.5s;
	}

	.module:nth-child(10) {
		animation-delay: 2.75s;
	}

	.module:nth-child(11) {
		animation-delay: 3s;
	}

	.module:nth-child(12) {
		animation-delay: 3.25s;
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
