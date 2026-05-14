<template>
	<CoreTitleCard
		title="👋Welcome"
		subtitle="It's nice to meet you!"
	>
		<div class="welcome-module">
			<div class="welcome-module-main">
				<Profile />
				<p>
					I am <b>Joshua Mellott-Lillie</b>, the
					<b>Director of Technology Innovation</b> at AccuWeather.
					With over a decade of experience in development, I have a
					passion for creating beautiful, functional, and accessible
					applications and services.
				</p>
			</div>
			<div class="buttons">
				<CoreExternalButton
					v-for="button in buttons"
					:key="button.text"
					:href="button.href"
					:text="button.text"
					:icon="button.icon"
					class="button"
				/>
			</div>
		</div>
	</CoreTitleCard>
</template>

<script setup lang="ts">
	const buttons = [
		{
			text: 'LinkedIn',
			icon: 'fa7-brands:linkedin',
			href: 'https://www.linkedin.com/in/joshua-mellott-lillie',
		},
		{
			text: 'GitHub',
			icon: 'fa7-brands:github',
			href: 'https://github.com/10jmellott',
		},
		{
			text: 'Email',
			icon: 'fa7-solid:envelope',
			href: 'mailto:joshua@mellott-lillie.com',
		},
	];
</script>

<style scoped>
	.welcome-module {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--padding);
		height: 100%;

		.welcome-module-main {
			display: flex;
			flex-direction: row;
			gap: var(--padding);

			@media (width <= 480px) {
				flex-direction: column;
			}
		}

		p {
			flex-grow: 1;
			margin-bottom: auto;
			line-height: normal;
		}

		.buttons {
			display: flex;
			gap: 8px;

			@media (width <= 480px) {
				flex-direction: column;
				width: 100%;
				gap: 8px;
			}
		}
	}
</style>
