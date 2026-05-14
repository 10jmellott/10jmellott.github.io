<template>
	<NuxtLink
		class="navigation-button clickable"
		:to
	>
		<Icon
			:name="icon"
			size="32px"
		/>
		<p>{{ text }}</p>
	</NuxtLink>
</template>

<script setup lang="ts">
	defineProps<{
		to: string;
		text: string;
		icon: string;
	}>();
</script>

<style scoped>
	.navigation-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8px;
		color: white;
		min-width: 80px;

		p {
			font-size: 0.8rem;
			text-transform: lowercase;
			padding: 4px 8px;
			font-weight: bold;
		}

		&.router-link-active {
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
