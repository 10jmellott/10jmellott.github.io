<template>
	<TitleCard
		title="💼Experience"
		:subtitle="subtitle"
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

				<div class="roles">
					<div
						v-for="(role, roleIndex) in career[index]
							? job.roles
							: [job.roles[0]]"
						:key="roleIndex"
						class="role-entry"
					>
						<p class="subtitle">
							{{ formatDateRange(role.start, role.end) }} ({{
								formatDuration(role.start, role.end)
							}})
						</p>
						<p class="role">
							{{ role.title }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</TitleCard>
</template>

<script setup lang="ts">
	import accuweather from '../../assets/accuweather.svg';
	import TitleCard from '../TitleCard.vue';

	const career = [
		{
			company: 'AccuWeather',
			companyLink: 'https://www.accuweather.com/',
			logo: accuweather,
			start: new Date(2014, 1),
			end: null,
			roles: [
				{
					title: 'Director, Web Technology',
					start: new Date(2024, 3),
					end: null,
				},
				{
					title: 'Senior Manager, Web Technology',
					start: new Date(2023, 3),
					end: new Date(2024, 3),
				},
				{
					title: 'Manager, Web Technology',
					start: new Date(2021, 7),
					end: new Date(2023, 3),
				},
				{
					title: 'Developer, Web Technology',
					start: new Date(2017, 8),
					end: new Date(2021, 7),
				},
				{
					title: 'Developer, Broadcast Applications',
					start: new Date(2014, 1),
					end: new Date(2017, 8),
				},
			],
		},
	];

	const subtitle = `${career[0].roles[0].title} at ${career[0].company}`;

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
		});
	}

	function formatDateRange(start: Date, end: Date | null): string {
		const startDate = formatDate(start);
		const endDate = end ? formatDate(end) : 'Present';
		return `${startDate} - ${endDate}`;
	}

	function formatDuration(start: Date, end: Date | null): string {
		if (!end) {
			end = new Date();
		}
		const totalMonths =
			(end.getFullYear() - start.getFullYear()) * 12 +
			(end.getMonth() - start.getMonth());
		const years = Math.floor(totalMonths / 12);
		const months = totalMonths % 12;

		let duration = '';
		if (years > 0) {
			duration += `${years} year${years > 1 ? 's' : ''}`;
		}
		if (months > 0) {
			if (years > 0) {
				duration += ' ';
			}
			duration += `${months} month${months > 1 ? 's' : ''}`;
		}
		return duration;
	}
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
</style>
