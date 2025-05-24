<template>
	<router-link
		class="navigation-button clickable"
		activeClass="selected"
		:to
	>
		<FontAwesomeIcon :icon />
		<p>{{ text }}</p>
	</router-link>
</template>

<script setup lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
	import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	defineProps<{
		to: string;
		text: string;
		icon: IconDefinition;
	}>();
</script>

<style scoped>
	.navigation-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16px;
		font-size: 1.5rem;
		transition: color var(--transition);
		color: white;
		font-weight: normal;
		min-width: 80px;

		p {
			font-size: 0.8rem;
			text-transform: lowercase;
			padding: 4px 8px;
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
