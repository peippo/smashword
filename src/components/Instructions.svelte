<script lang="ts">
	import { isNarrowScreen } from "../store";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	function handleLeft() {
		dispatch("decrease-length");
	}

	function handleRight() {
		dispatch("increase-length");
	}

	function handleClear() {
		dispatch("clear");
	}
</script>

<div class="container">
	<p class="text">
		<span class="highlight"><strong>{$isNarrowScreen ? "Tap" : "Smash keys"}</strong></span> to generate a password
	</p>
	<div class="controls">
		<p>
			<button on:click={handleLeft}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
			</button>
			<button on:click={handleRight}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
			</button>
			<span class="d-none">adjust </span>length
		</p>
		{#if $isNarrowScreen}
			<button on:click={handleClear}>Clear</button>
		{:else}
			<p><button on:click={handleClear}>Esc</button> clear</p>
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	@media (min-width: 750px) {
		.container {
			flex-direction: row;
			gap: 2rem;
		}
	}

	.text {
		margin-bottom: 0.5rem;
		font-size: 16px;
		text-align: center;
	}

	.controls {
		display: flex;
		gap: 1rem;
	}

	p {
		margin: 0;
	}

	@media (max-width: 600px) {
		.d-none {
			display: none;
		}
	}

	.highlight {
		color: var(--color-yellow);
		text-shadow: 0 2px 0 var(--color-blue);
	}

	svg {
		width: 18px;
		height: 16px;
		fill: var(--color-yellow);
	}
</style>
