<template>
	<TitleCard title="Welcome">
		<div class="welcome-module">
			<div class="welcome-module-main">
				<Profile />
				<p>
					I am <b>Joshua Mellott-Lillie</b>, the
					<b>Director of Web Technology</b> at AccuWeather. With over
					a decade of experience in development, I have a passion for
					creating beautiful, functional, and accessible web
					applications.
				</p>
			</div>
			<div class="buttons">
				<Button
					class="button"
					text="LinkedIn"
					:icon="faLinkedin"
					href="https://www.linkedin.com/in/joshua-mellott-lillie"
					external
				/>
				<Button
					class="button"
					text="GitHub"
					:icon="faGithub"
					href="https://github.com/10jmellott"
					external
				/>
			</div>
		</div>
	</TitleCard>
</template>

<script setup lang="ts">
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
	import TitleCard from '../TitleCard.vue';
	import Button from '../core/Button.vue';
	import Profile from '../core/Profile.vue';
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
		}

		p {
			flex-grow: 1;
			margin-bottom: auto;
			line-height: normal;
		}

		.buttons {
			display: flex;
			gap: 8px;
		}
	}
</style>
