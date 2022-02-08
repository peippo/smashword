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
	<p>
		<span class="highlight"><strong>Smash keys</strong></span> to generate a password
	</p>
	<p>
		<button on:click={handleLeft} class="key">&larr;</button>
		<button on:click={handleRight} class="key">&rarr;</button> adjust length
	</p>
	<p><button on:click={handleClear} class="key">Esc</button> clear</p>
</div>

<style>
	.container {
		display: flex;
		gap: 2rem;
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
