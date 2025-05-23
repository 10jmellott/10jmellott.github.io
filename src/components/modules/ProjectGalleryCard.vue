<template>
	<div class="project-gallery-card card">
		<div class="gallery">
			<img
				v-for="(img, idx) in images"
				:key="idx"
				:src="img"
				:alt="`Screenshot ${idx + 1}`"
				class="gallery-img"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{ images: string[] }>();
</script>

<style scoped>
	.project-gallery-card {
		padding: 0;
	}

	.gallery {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		padding: var(--padding);
	}

	.gallery-img {
		max-width: 180px;
		max-height: 120px;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
		object-fit: cover;
	}
</style>
