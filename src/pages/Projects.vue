<template>
	<div class="projects-page">
		<div
			class="slide-in"
			:class="`type-${item.type}`"
			v-for="item in flatProjectList"
			:key="item.key"
		>
			<HeaderCard
				v-if="item.type === 'year'"
				:title="(item as any).year.toString()"
			/>
			<ProjectMetaCard
				v-else-if="item.type === 'project'"
				:project="(item as any).project"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import ProjectMetaCard from '../components/modules/ProjectMetaCard.vue';
	import HeaderCard from '../components/core/HeaderCard.vue';

	const projects = [
		{
			year: 2025,
			projects: [
				{
					title: 'Personal Website',
					subtitle: 'Portfolio & Resume',
					description: `<b>Developed and designed</b> this personal website as a static web application, optimizing performance and reliability.
						Hosted via <b>GitHub Pages</b> for seamless deployment and accessibility.
						Finally the domain is provided by <b>Cloudflare</b>, ensuring a fast and secure experience.`,
					technologies: [
						'Vue.js',
						'TypeScript',
						'Vite',
						'GitHub Pages',
						'Cloudflare',
					],
					code: 'https://github.com/10jmellott/10jmellott.github.io',
					website: 'https://mellott-lillie.com',
					images: ['/projects/website.webp'],
				},
				{
					title: 'IoT Dashboard',
					subtitle: 'Ambios IN5 Air Quality Sensor',
					description: `Custom dashboard to monitor my home's Air Quality using <b>Grafana</b> for visualizations and <b>Prometheus</b> for time-series data aggregation.
						A custom <b>Docker</b> container runs as a data transformer to collect data from my home's
						<a href="https://ambios.network/shop/product/in5" rel="noopener noreferer" target="_blank">IN5 sensor</a>. Deployed on my home server.`,
					technologies: ['Grafana', 'Prometheus', 'Docker', 'IoT'],
					images: ['/projects/grafana.webp'],
				},
				{
					title: 'Home Server',
					subtitle: 'TrueNAS Scale',
					description: `Created a home server using TrueNAS Scale, providing a centralized storage solution for my home network.
						Deployed a Nextcloud and Immich instance for file sharing and collaboration of files and photos.`,
					technologies: [
						'TrueNAS Scale',
						'Nextcloud',
						'Immich',
						'Cloudflare',
					],
					images: ['/projects/nas.webp'],
				},
			],
		},
		{
			year: 2024,
			projects: [
				{
					title: 'Advent of Code 2024',
					subtitle: 'Festive Coding Challenge',
					description: `Participated in the <b>Advent of Code 2024</b>, a festive coding challenge that runs throughout December.
						Solved daily coding puzzles to enhance my problem-solving skills and algorithmic thinking.`,
					technologies: [
						'Coding Challenge',
						'Problem Solving',
						'Algorithmic Thinking',
						'Python',
						'Jupyter Notebooks',
					],
					code: 'https://github.com/10jmellott/AdventOfCode2024',
					website: 'https://adventofcode.com/2024',
					images: ['/projects/aoc2024.webp'],
				},
				{
					title: 'Weather Wing',
					subtitle: 'Experimental Weather App',
					description: `Developed Weather Wing, an experimental weather application that provides real-time weather updates and forecasts.
						Utilized modern web technologies to create a responsive and user-friendly interface.`,
					technologies: [
						'Vue.js',
						'TypeScript',
						'Vite',
						'AccuWeather API',
						'UI/UX Design',
					],
					images: ['/projects/weather-wing.webp'],
				},
				{
					title: 'Coding Train Browser',
					subtitle: 'Creative Coding',
					description: `Created a website for my personal exercises The Coding Train, a popular YouTube channel focused on creative coding.
						The site allows users to explore my implementations of various coding challenges and projects.`,
					technologies: ['p5.js', 'Creative Coding'],
					code: 'https://github.com/10jmellott/CodingTrainBrowser',
					website:
						'https://www.mellott-lillie.com/CodingTrainBrowser/',
					images: ['/projects/coding-train-browser.webp'],
				},
				{
					title: "No Man's Sky Companion",
					subtitle: 'Personal Game Assistant',
					description: `Developed a personal companion website for the game No Man's Sky.
						The site works as a personal assistant for crafting in the game, providing information
						on crafting recipes and resources for multi-step recipes.`,
					technologies: ['p5.js', 'Creative Coding'],
					code: 'https://github.com/10jmellott/nms-crafting-trees',
					website:
						'https://www.mellott-lillie.com/nms-crafting-trees/',
					images: ['/projects/nms.webp'],
				},
			],
		},
		// Add more projects here...
	];

	// Flatten the projects array for rendering
	const flatProjectList = projects.flatMap((year) => [
		{ type: 'year', year: year.year, key: `year-${year.year}` },
		...year.projects.map((project) => ({
			type: 'project',
			project,
			key: `project-${year.year}-${project.title}`,
		})),
	]);
</script>

<style scoped>
	.projects-page {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
	}

	.type-year {
		margin-left: auto;
	}
</style>
