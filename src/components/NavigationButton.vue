<template>
	<div
		class="navigation-button"
		:class="{ selected }"
	>
		<FontAwesomeIcon :icon />
		<p>{{ text }}</p>
	</div>
</template>

<script setup lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
	import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	withDefaults(
		defineProps<{
			to: string;
			selected?: boolean;
			text: string;
			icon: IconDefinition;
		}>(),
		{
			selected: false,
		}
	);
</script>

<style scoped>
	.navigation-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16px;
		font-size: 1.5rem;
		cursor: pointer;
		transition: color var(--transition);

		p {
			font-size: 0.8rem;
			text-transform: lowercase;
		}

		&.selected {
			color: var(--accent);

			p {
				background-color: var(--accent);
				color: var(--foreground);
				border-radius: 16px;
				padding: 4px 8px;
				transition: background-color var(--transition);
			}

			&:hover {
				p {
					background-color: var(--accent2);
				}
			}
		}

		&:hover {
			color: var(--accent2);
		}
	}
</style>
