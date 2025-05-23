<template>
	<TitleCard
		title="💼Experience"
		subtitle="Director, Web Technology at AccuWeather"
	>
		<div class="experience-module">
			<div
				v-for="(job, index) in career"
				:key="index"
				class="company"
			>
				<div class="company-title">
					<img
						:src="job.logo"
						alt="Company Logo"
						height="24"
						width="24"
					/>
					<a
						:href="job.companyLink"
						target="_blank"
						class="company-link"
						>{{ job.company }}
					</a>
					<p class="subtitle">
						{{ formatDuration(job.start, job.end) }}
					</p>
				</div>
				<p>{{ job.description }}</p>
			</div>
		</div>
		<RouterLink
			class="experience-link"
			to="/experience"
		>
			<Button
				:icon="faBriefcase"
				text="Dive Into My Experience"
				href="/experience"
			/>
		</RouterLink>
	</TitleCard>
</template>

<script setup lang="ts">
	import accuweather from '../../assets/accuweather.svg';
	import TitleCard from '../core/TitleCard.vue';
	import { RouterLink } from 'vue-router';
	import Button from '../core/Button.vue';
	import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
	import { formatDuration } from '../../utils/dates';

	const career = [
		{
			company: 'AccuWeather',
			companyLink: 'https://www.accuweather.com/',
			description:
				'AccuWeather is a global leader in weather forecasting and services, providing superior accuracy for millions of users worldwide.',
			logo: accuweather,
			start: new Date(2014, 1),
			end: undefined,
		},
	];
</script>

<style scoped>
	.experience-module {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.company {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.company-title {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.roles {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.role {
		color: var(--accent);
	}

	.experience-link {
		display: flex;
		margin-top: auto;
		margin-left: auto;
		text-decoration: none;
	}
</style>
