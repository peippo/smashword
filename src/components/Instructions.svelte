<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { characterCount, maxLength, isNarrowScreen } from "../store";
	import { PASSWORD_LIMITS } from "../utils/utils";

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
		<span class="highlight">
			<strong>{$isNarrowScreen ? "Tap" : "Smash keys"}</strong>
		</span> to generate a password
	</p>
	<div class="controls">
		<div>
			<button
				disabled={$maxLength === PASSWORD_LIMITS.MIN}
				on:click={handleLeft}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
					/>
				</svg>
				<span class="screen-reader-text"
					>Decrease maximum password length</span
				>
			</button>
			<button
				disabled={$maxLength === PASSWORD_LIMITS.MAX}
				on:click={handleRight}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
					/>
				</svg>
				<span class="screen-reader-text"
					>Increase maximum password length</span
				>
			</button>
			Max length ({$maxLength})
		</div>

		{#if $isNarrowScreen}
			<button disabled={$characterCount === 0} on:click={handleClear}
				>Clear</button
			>
		{:else}
			<button disabled={$characterCount === 0} on:click={handleClear}
				>Esc</button
			> Clear
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin-top: 0.5rem;
	}

	@media (min-width: 850px) {
		.container {
			flex-direction: row;
			gap: 2rem;
		}
	}

	.text {
		font-size: 16px;
		text-align: center;
		margin: 0;
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 2.5rem;
		min-height: 2.5rem;
	}

	@media (max-width: 600px) {
		button {
			min-width: 2rem;
			min-height: 2rem;
		}
	}

	button:disabled svg {
		fill: var(--color-cyan);
	}

	.highlight {
		color: var(--color-yellow);
		text-shadow: 0 2px 0 var(--color-blue);
	}

	svg {
		width: 18px;
		height: 16px;
		fill: var(--color-yellow);
		transition: fill 0.2s ease-in-out;
	}
</style>
