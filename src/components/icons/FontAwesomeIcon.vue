<script lang="ts" setup>
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	defineProps<{
		icon: IconDefinition;
	}>();
</script>

<template>
	<svg
		:viewBox="`0 0 ${icon.icon[0]} ${icon.icon[1]}`"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<template v-if="typeof icon.icon[4] === 'string'">
			<path :d="icon.icon[4]" />
		</template>
		<template v-else>
			<path
				v-for="(d, i) in icon.icon[4]"
				:key="i"
				:d="d"
			/>
		</template>
	</svg>
</template>

<style scoped>
	svg {
		width: 1em;
		height: 1em;
		box-sizing: content-box;
	}
</style>
