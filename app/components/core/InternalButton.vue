<script setup lang="ts">
	const props = defineProps<{
		to: string;
		icon: string;
		text: string;
		cta?: boolean;
	}>();
	const postIcon = computed(() =>
		props.cta ? 'fa7-solid:chevron-right' : ''
	);
</script>

<template>
	<NuxtLink :to>
		<CoreButton
			:icon
			:post-icon="postIcon"
			:text
		/>
	</NuxtLink>
</template>
