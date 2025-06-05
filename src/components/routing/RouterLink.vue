<script setup lang="ts">
	import { useRouter } from '../../composables/useRouter';
	const props = defineProps<{ to: string }>();
	const router = useRouter();
</script>

<template>
	<a
		:href="`#${props.to}`"
		class="router-link"
		:class="{
			active: router.route.value === props.to,
		}"
	>
		<slot />
	</a>
</template>
