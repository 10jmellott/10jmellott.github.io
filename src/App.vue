<script setup lang="ts">
	import Header from './components/Header.vue';
	import TreeBackground from './components/core/TreeBackground.vue';
</script>

<template>
	<Header class="header" />
	<main>
		<router-view />
	</main>
	<TreeBackground />
</template>

<style scoped></style>
