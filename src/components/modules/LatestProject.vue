<template>
	<TitleCard
		title="🚧Latest Project"
		subtitle="https://www.mellott-lillie.com"
	>
		<div>
			<img
				class="latest-project-thumb"
				height="180"
				width="180"
				src="/latest-project.webp"
				alt="Latest project thumbnail"
			/>
			<span>
				Redesigned and developed a personal website as a static web
				application, optimizing performance and reliability. Hosted via
				GitHub Pages for seamless deployment and accessibility.
			</span>
		</div>
		<RouterLink
			class="latest-project-link"
			to="/projects"
		>
			<Button
				:icon="faTerminal"
				text="Discover My Work"
				href="/projects"
			/>
		</RouterLink>
	</TitleCard>
</template>

<script setup lang="ts">
	import TitleCard from '../TitleCard.vue';
	import { RouterLink } from 'vue-router';
	import Button from '../core/Button.vue';
	import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
</script>

<style>
	.latest-project-thumb {
		display: inline;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
		float: left;
		margin-right: 12px;
	}

	.latest-project-link {
		display: flex;
		justify-content: flex-end;
		margin-top: 16px;
		text-decoration: none;
	}
</style>
