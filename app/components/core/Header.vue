<template>
	<header class="glass">
		<NuxtLink
			to="/"
			aria-label="Home"
		>
			<Icon
				name="icons:logo"
				size="80px"
			/>
		</NuxtLink>
		<nav>
			<CoreNavigationButton
				to="/"
				text="Home"
				icon="fa7-solid:home"
				selected
			/>
			<CoreNavigationButton
				to="/me"
				text="Me"
				icon="fa7-solid:id-card"
			/>
			<CoreNavigationButton
				to="/projects"
				text="Projects"
				icon="fa7-solid:terminal"
			/>
			<CoreNavigationButton
				to="/experience"
				text="Experience"
				icon="fa7-solid:briefcase"
			/>
		</nav>
	</header>
</template>

<style scoped>
	header {
		display: flex;
		align-items: center;
		gap: var(--padding);
		background: rgb(var(--background-values), 0.8);
		padding: calc(var(--padding) / 2) var(--padding);
		justify-content: space-between;

		nav {
			display: flex;
			gap: var(--padding);
			margin-left: auto;

			@media (width < 425px) {
				gap: 0;

				:first-child {
					display: none;
				}
			}
		}
	}
</style>
