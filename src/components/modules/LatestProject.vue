<template>
	<TitleCard
		title="🚧Latest Project"
		subtitle="www.mellott-lillie.com"
	>
		<div>
			<img
				class="latest-project-thumb"
				height="180"
				width="180"
				src="/projects/website.webp"
				alt="Latest project thumbnail"
			/>
			<span>
				<b>Developed and designed</b> this personal website as a static
				web application, optimizing performance and reliability. Hosted
				via <b>GitHub Pages</b> for seamless deployment and
				accessibility. Finally the domain is provided by
				<b>Cloudflare</b>, ensuring a fast and secure experience.
			</span>
		</div>
		<InternalButton
			class="latest-project-link"
			to="projects"
			:icon="faTerminal"
			text="Discover My Work"
		/>
	</TitleCard>
</template>

<script setup lang="ts">
	import TitleCard from '../core/TitleCard.vue';
	import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
	import InternalButton from '../core/InternalButton.vue';
</script>

<style>
	.latest-project-thumb {
		display: inline;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
		float: left;
		margin-right: var(--padding);
	}

	.latest-project-link {
		display: flex;
		justify-content: flex-end;
		margin-top: 16px;
		text-decoration: none;
	}
</style>
