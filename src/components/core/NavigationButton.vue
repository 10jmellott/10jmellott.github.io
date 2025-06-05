<template>
	<RouterLink
		class="navigation-button clickable"
		:to
	>
		<FontAwesomeIcon :icon />
		<p>{{ text }}</p>
	</RouterLink>
</template>

<script setup lang="ts">
	import FontAwesomeIcon from '../icons/FontAwesomeIcon.vue';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import RouterLink from '../routing/RouterLink.vue';

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
		color: white;
		font-weight: normal;
		min-width: 80px;

		p {
			font-size: 0.8rem;
			text-transform: lowercase;
			padding: 4px 8px;
			font-weight: bold;
		}

		&.active {
			color: var(--accent);

			p {
				background-color: var(--accent);
				color: var(--background);
				border-radius: 16px;
				padding: 4px 8px;
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
