<template>
	<TitleCard
		title="🎓Education"
		subtitle="B.S. Computer Science"
	>
		<div class="education-module">
			<div
				v-for="(college, index) in education"
				:key="index"
				class="college"
			>
				<div class="college-title">
					<img
						:src="college.logo"
						alt="College Logo"
						height="24"
						width="24"
					/>
					<a
						:href="college.link"
						target="_blank"
						class="college-link"
						>{{ college.name }}
					</a>
				</div>
				<div class="degrees">
					<div
						v-for="(degree, degreeIndex) in college.degrees"
						:key="degreeIndex"
						class="degrees-entry"
					>
						<p class="subtitle">
							Graduated {{ formatDate(college.date) }}
						</p>
						<p class="degree">
							{{ degree.title }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</TitleCard>
</template>

<script setup lang="ts">
	import pennstate from '../../assets/pennstate.svg';
	import TitleCard from '../core/TitleCard.vue';

	const education = [
		{
			name: 'Pennsylvania State University',
			link: 'https://www.psu.edu/',
			logo: pennstate,
			date: new Date(2013, 11),
			degrees: [
				{
					title: 'Bachelor of Science, Computer Science',
				},
			],
		},
	];

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
		});
	}
</script>

<style scoped>
	.education-module {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.college {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.college-title {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.degrees {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.degree {
		color: var(--accent);
	}
</style>
