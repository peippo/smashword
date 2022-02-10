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
			<button on:click={handleLeft}>&larr;</button>
			<button on:click={handleRight}>&rarr;</button>
			<span class="d-none">adjust </span>length
		</p>
		<p><button on:click={handleClear}>Esc</button> clear</p>
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
</style>
