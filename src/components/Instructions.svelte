<script lang="ts">
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
		<span class="highlight"><strong>Smash keys</strong></span> to generate a password
	</p>
	<div class="controls">
		<p>
			<button on:click={handleLeft} class="key">&larr;</button>
			<button on:click={handleRight} class="key">&rarr;</button>
			<span class="d-none">adjust </span>length
		</p>
		<p><button on:click={handleClear} class="key">Esc</button> clear</p>
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

	.key {
		border: 0;
		color: var(--color-yellow);
		background-color: var(--color-purple);
		padding: 0.25rem 0.5rem;
		border-radius: 3px;
		border-bottom: 2px solid var(--color-blue);
		transition: background-color 0.2s ease-in-out;
	}

	.key:hover {
		cursor: pointer;
	}

	.key:active {
		background-color: var(--color-blue);
	}

	.key:focus {
		outline: 2px dotted var(--color-blue);
		outline-offset: 2px;
	}

	.key:focus:not(:focus-visible) {
		outline: none;
	}
</style>
