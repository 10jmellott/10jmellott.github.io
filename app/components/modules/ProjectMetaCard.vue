<template>
	<CoreTitleCard
		:title="project.title"
		:subtitle="project.subtitle"
		:image="
			project.images && project.images.length > 0
				? project.images[0]
				: undefined
		"
	>
		<!-- eslint-disable-next-line vue/no-v-html -->
		<p v-html="project.description" />
		<CorePills :pills="project.technologies" />
		<div class="links">
			<CoreExternalButton
				v-if="project.code"
				:href="project.code"
				icon="fa7-brands:github"
				text="Code"
			/>
			<CoreExternalButton
				v-if="project.website"
				:href="project.website"
				icon="fa7-solid:globe"
				text="Website"
				external
			/>
		</div>
	</CoreTitleCard>
</template>

<script setup lang="ts">
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
