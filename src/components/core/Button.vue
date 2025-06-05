<script setup lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import FontAwesomeIcon from '../icons/FontAwesomeIcon.vue';
	defineProps<{
		icon: IconDefinition;
		postIcon?: IconDefinition;
		text: string;
	}>();
</script>

<template>
	<div class="button clickable">
		<FontAwesomeIcon
			class="icon"
			:icon
		/>
		<span>{{ text }}</span>
		<FontAwesomeIcon
			v-if="postIcon"
			:icon="postIcon"
		/>
	</div>
</template>

<style scoped>
	.button {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px;
		font-size: 14px;
		transition: background-color var(--transition);
		color: var(--background-alt);
		background-color: var(--foreground);
		border-radius: var(--border-radius);

		.icon {
			font-size: 1.25rem;
		}

		span {
			padding-left: 8px;
			border-left: 1px solid var(--background-alt);
			transition: border-color var(--transition);
		}

		&:hover {
			background-color: var(--foreground-alt);
		}
	}
</style>
