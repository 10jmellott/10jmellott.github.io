<template>
	<div class="placeholder">
		<slot></slot>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
	.placeholder {
		background-color: var(--background-alt);
		padding: var(--padding);
		border-radius: var(--border-radius);
	}
</style>
