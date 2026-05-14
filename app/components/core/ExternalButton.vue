<script setup lang="ts">
	defineProps<{
		href: string;
		icon: string;
		text: string;
	}>();
</script>

<template>
	<a
		:href
		target="_blank"
	>
		<CoreButton
			:icon
			post-icon="fa7-solid:up-right-from-square"
			:text
		/>
	</a>
</template>
