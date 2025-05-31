<template>
	<p><slot></slot></p>
</template>

<style scoped>
	p {
		border-radius: 12px;
		padding: 4px 12px;
		font-size: 0.75rem;
		text-transform: lowercase;
		background: var(--accent);
		color: var(--background);
	}
</style>
