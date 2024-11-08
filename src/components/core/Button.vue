<script setup lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
	import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
	import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faUpRightFromSquare';
	defineProps<{
		href: string;
		icon: IconDefinition;
		text: string;
		external?: boolean;
	}>();
</script>

<template>
	<a
		class="button"
		:href
		target="_blank"
	>
		<FontAwesomeIcon
			class="icon"
			:icon
		/>
		<span>{{ text }}</span>
		<FontAwesomeIcon
			v-if="external"
			class="external-icon"
			:icon="faUpRightFromSquare"
		/>
	</a>
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

		.external-icon {
			font-size: 0.75rem;
			margin-left: auto;
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
