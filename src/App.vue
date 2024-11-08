<script setup lang="ts">
	import Header from './components/Header.vue';
	import Experience from './components/modules/Experience.vue';
	import Welcome from './components/modules/Welcome.vue';
	import TitleCard from './components/TitleCard.vue';
</script>

<template>
	<div class="grid-layout">
		<Header class="module header" />
		<Welcome class="module welcome" />
		<TitleCard
			class="module weather"
			title="Weather"
		>
			<p>78&deg; and Sunny</p>
		</TitleCard>
		<TitleCard
			class="module projects"
			title="Latest Project"
		>
			<p>Details about my recent projects.</p>
		</TitleCard>
		<TitleCard
			class="module education"
			title="Education"
		>
			<p>Details about my educational background.</p>
		</TitleCard>
		<TitleCard
			class="module skills"
			title="Skills"
		>
			<p>Skill Word Map</p>
		</TitleCard>
		<Experience class="module experience" />
		<TitleCard
			class="module footer"
			title="Footer"
		>
			<p>Footer information.</p>
		</TitleCard>
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
			'header header header'
			'welcome welcome weather'
			'education experience experience'
			'projects projects skills'
			'footer footer footer';
		position: relative;
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

	.header {
		grid-area: header;
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
</style>
