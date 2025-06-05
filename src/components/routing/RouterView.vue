<script setup lang="ts">
	import { useRouter } from '../../composables/useRouter';

	const router = useRouter();
</script>

<template>
	<component
		:is="router.component.value"
		v-if="router.component.value"
	/>
</template>
