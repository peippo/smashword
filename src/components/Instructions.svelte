<script lang="ts">
</script>

<div class="container">
	<p>
		<span class="highlight"><strong>Smash keys</strong></span> to generate a password
	</p>
	<p>
		<span class="key">&larr;</span> <span class="key">&rarr;</span> adjust length
	</p>
	<p><span class="key">Esc</span> clear</p>
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
		color: var(--color-yellow);
		background-color: var(--color-purple);
		padding: 0.25rem 0.5rem;
		border-radius: 3px;
		border-bottom: 2px solid var(--color-blue);
	}
</style>
