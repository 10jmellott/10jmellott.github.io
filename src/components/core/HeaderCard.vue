<template>
	<div class="header-card">
		<slot name="icon"></slot>
		<div>
			<template v-if="link">
				<a
					:href="link"
					target="_blank"
					class="header-link"
				>
					{{ title }}
				</a>
			</template>
			<template v-else>
				<span class="header-link">{{ title }}</span>
			</template>
			<p
				v-if="subtitle"
				class="subtitle"
			>
				{{ subtitle }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		title: string;
		subtitle?: string;
		link?: string;
	}>();
</script>

<style scoped>
	.header-card {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.header-link {
		font-size: 2rem;
		color: var(--accent2);
		font-weight: bold;
	}
</style>
