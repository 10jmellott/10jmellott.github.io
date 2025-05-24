<script setup lang="ts">
	import { faIdCard } from '@fortawesome/free-solid-svg-icons/faIdCard';
	import InternalButton from '../components/core/InternalButton.vue';
</script>

<template>
	<div class="floating-text">
		<p class="floating-text-title slide-in">Joshua Mellott-Lillie</p>
		<p class="floating-text-subtitle slide-in">Director, Web Technology</p>
		<InternalButton
			class="slide-in"
			:icon="faIdCard"
			text="See My Journey"
			to="/me"
			cta
		/>
	</div>
</template>

<style scoped>
	.floating-text {
		position: fixed;
		top: 30%;
		left: 40%;
		text-align: right;
		font-weight: 100;
		text-transform: uppercase;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: var(--padding);

		.floating-text-title {
			font-size: 4vw;
		}

		.floating-text-subtitle {
			font-size: 2vw;
		}

		@media (width <= 1024px) {
			top: 20%;
			left: 1rem;
			right: 1rem;

			.floating-text-title {
				font-size: 40px;
			}

			.floating-text-subtitle {
				font-size: 20px;
			}
		}
	}
</style>
