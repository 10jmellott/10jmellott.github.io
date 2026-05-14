<script setup lang="ts">
	defineProps<{
		icon: string;
		postIcon?: string;
		text: string;
	}>();
</script>

<template>
	<div class="button clickable">
		<Icon
			class="icon"
			:name="icon"
		/>
		<span class="button-text">{{ text }}</span>
		<Icon
			v-if="postIcon"
			:name="postIcon"
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

		.button-text {
			padding-left: 8px;
			border-left: 1px solid var(--background-alt);
			transition: border-color var(--transition);
		}

		&:hover {
			background-color: var(--foreground-alt);
		}
	}
</style>
