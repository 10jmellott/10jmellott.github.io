<script setup lang="ts">
	import { useRouter } from '../../composables/useRouter';
	import { defineProps } from 'vue';

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
