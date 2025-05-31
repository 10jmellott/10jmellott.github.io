<template>
	<div class="experience-page">
		<HeaderCard
			class="slide-in"
			:title="company.name"
			:link="company.link"
			:subtitle="overallDuration"
		>
			<template #icon>
				<img
					:src="company.logo"
					:alt="`${company.name} Logo`"
					width="48"
					height="48"
				/>
			</template>
		</HeaderCard>
		<TitleCard
			v-for="role in company.roles"
			class="slide-in"
			:key="role.title"
			:title="role.title"
			:subtitle="`${asShortDate(role.start)} - ${role.end ? asShortDate(role.end) : 'present'} | ${formatDuration(role.start, role.end)}`"
		>
			<ul class="role-description">
				<li
					v-for="(desc, index) in role.description"
					:key="index"
					class="bullet-point"
					v-html="desc"
				></li>
			</ul>
		</TitleCard>
	</div>
</template>

<script setup lang="ts">
	import accuweather from '../assets/accuweather.svg';
	import TitleCard from '../components/core/TitleCard.vue';
	import HeaderCard from '../components/core/HeaderCard.vue';
	import { formatDuration, asShortDate } from '../utils/dates';

	const company = {
		name: 'AccuWeather',
		logo: accuweather,
		link: 'https://www.accuweather.com/',
		roles: [
			{
				title: 'Director, Web Technology',
				start: new Date(2024, 3), // Apr 2024
				description: [
					'Leads the web technology teams to deliver robust weather applications across <b>multiple lines of business</b>.',
					'Oversees architectural design and development of <b>interactive systems</b>.',
					'Collaborates with <b>cross-functional teams</b> to enhance application features.',
				],
			},
			{
				title: 'Senior Manager, Web Technology',
				start: new Date(2021, 7), // Aug 2021
				end: new Date(2024, 3), // Apr 2024
				description: [
					'<b>Streamlined workflow process</b> to enhance productivity.',
					'Developed and nurtured <b>strategic relationships</b> with stakeholders to enhance collaboration and drive successful project outcomes.',
				],
			},
			{
				title: 'Senior Software Developer, TV & Web',
				start: new Date(2014, 1), // Feb 2014
				end: new Date(2021, 7), // Aug 2021
				description: [
					'Developed novel <b>interactive touchscreen applications</b> for broadcast television.',
					'Architected and built software that connected a myriad of <b>weather services</b>, from AccuWeather and others, for broadcast networks.',
					"Successfully architected and deployed AccuWeather's primary website, www.accuweather.com, as a <b>cloud-native</b> service.",
				],
			},
		],
	};

	const overallStart = company.roles[company.roles.length - 1].start;
	const overallDuration = formatDuration(overallStart);
</script>

<style scoped>
	.experience-page {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
		margin: 0 auto;
	}

	.roles-list {
		display: flex;
		flex-direction: column;
		gap: calc(var(--padding) / 2);
	}

	.role-description {
		display: flex;
		flex-direction: column;
		gap: calc(var(--padding) / 2);
		line-height: 1.5;

		li {
			list-style-type: circle;
			margin-left: calc(var(--padding) * 3 / 4);
			padding-left: calc(var(--padding) / 4);
		}
	}
</style>
