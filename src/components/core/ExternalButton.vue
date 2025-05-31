<script setup lang="ts">
	import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
	import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faUpRightFromSquare';
	import Button from './Button.vue';
	defineProps<{
		href: string;
		icon: IconDefinition;
		text: string;
	}>();
</script>

<template>
	<a
		:href
		target="_blank"
	>
		<Button
			:icon
			:post-icon="faUpRightFromSquare"
			:text
		/>
	</a>
</template>
