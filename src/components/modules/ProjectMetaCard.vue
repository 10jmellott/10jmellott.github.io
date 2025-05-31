<template>
	<TitleCard
		:title="project.title"
		:subtitle="project.subtitle"
		:image="
			project.images && project.images.length > 0
				? project.images[0]
				: undefined
		"
	>
		<p v-html="project.description"></p>
		<Pills :pills="project.technologies" />
		<div class="links">
			<ExternalButton
				v-if="project.code"
				:href="project.code"
				:icon="faGithub"
				text="Code"
			/>
			<ExternalButton
				v-if="project.website"
				:href="project.website"
				:icon="faGlobe"
				text="Website"
				external
			/>
		</div>
	</TitleCard>
</template>

<script setup lang="ts">
	import TitleCard from '../core/TitleCard.vue';
	import Pills from '../core/Pills.vue';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
	import ExternalButton from '../core/ExternalButton.vue';
	defineProps<{
		project: {
			title: string;
			subtitle?: string;
			description: string;
			technologies: string[];
			code?: string;
			website?: string;
			images?: string[];
		};
	}>();
</script>

<style scoped>
	.links {
		display: flex;
		gap: calc(var(--padding) / 2);
	}
</style>
