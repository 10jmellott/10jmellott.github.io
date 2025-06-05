<script setup lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons/faCircleChevronRight';
	import Button from './Button.vue';
	defineProps<{
		to: string;
		icon: IconDefinition;
		text: string;
		cta?: boolean;
	}>();
</script>

<template>
	<RouterLink :to>
		<Button
			:icon
			:post-icon="cta ? faCircleChevronRight : undefined"
			:text
		/>
	</RouterLink>
</template>
