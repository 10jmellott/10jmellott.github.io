<template>
	<CoreTitleCard
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
		<CoreInternalButton
			class="latest-project-link"
			to="projects"
			icon="fa7-solid:terminal"
			text="Discover My Work"
		/>
	</CoreTitleCard>
</template>

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
