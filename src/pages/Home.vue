<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue';
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
	import Education from '../components/modules/Education.vue';
	import Experience from '../components/modules/Experience.vue';
	import Interests from '../components/modules/Interests.vue';
	import LatestProject from '../components/modules/LatestProject.vue';
	import Skills from '../components/modules/Skills.vue';
	import Technologies from '../components/modules/Technologies.vue';
	import Welcome from '../components/modules/Welcome.vue';
	import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

	// Add chevron visibility logic
	const showChevron = ref(true);

	// Add ref for grid layout
	const gridRef = ref<HTMLElement | null>(null);

	function handleScroll() {
		showChevron.value = window.scrollY === 0;
	}

	// Scroll to grid layout when chevron is clicked
	function scrollToGrid() {
		if (gridRef.value) {
			gridRef.value.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});
	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<template>
	<Transition>
		<div v-if="showChevron">
			<FontAwesomeIcon
				ref="chevron"
				class="chevron clickable"
				:icon="faChevronCircleDown"
				@click="scrollToGrid"
			/>
			<div
				class="floating-text"
				v-if="showChevron"
			>
				<p class="floating-text-title">Joshua Mellott-Lillie</p>
				<p class="floating-text-subtitle">Director, Web Technology</p>
			</div>
		</div>
	</Transition>
	<div
		class="grid-layout"
		ref="gridRef"
	>
		<Welcome class="module welcome" />
		<LatestProject class="module latest-project" />
		<Education class="module education" />
		<Experience class="module experience" />
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

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-10px);
		}
	}

	/* we will explain what these classes do next! */
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}

	.floating-text {
		position: fixed;
		top: 30%;
		left: 40%;
		text-align: center;
		font-weight: 100;
		line-height: 1;
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

	.chevron {
		position: fixed;
		bottom: 1rem;
		left: 50%;
		font-size: 3rem;
		color: var(--accent2);
		animation: bounce 2s infinite ease-in-out;
	}

	.grid-layout {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: var(--padding);
		grid-template-areas:
			'welcome welcome latest-project'
			'education experience experience'
			'technologies experience experience'
			'skills skills interests';
		margin-top: calc(110vh - 128px);
		margin-bottom: 10vh;
		scroll-margin-top: calc(80px + var(--padding));

		/* Mobile */
		@media (width <= 1024px) {
			grid-template-columns: 1fr;
			grid-template-areas:
				'welcome'
				'latest-project'
				'education'
				'experience'
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
