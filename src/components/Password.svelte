<script type="ts">
	import Character from "./Character.svelte";
	import CharacterPlaceholder from "./CharacterPlaceholder.svelte";
	import { characterCount, maxLength } from "../store";

	$: if ($characterCount > $maxLength) {
		$characterCount = $maxLength;
	}
</script>

<section>
	<h2 class="screen-reader-text">Generated password</h2>
	<div class="password" id="password">
		{#each Array($maxLength) as character, index}
			<svelte:component
				this={index < $characterCount ? Character : CharacterPlaceholder}
			/>
		{/each}
	</div>
</section>

<style>
	.password {
		--cell-size: 2rem;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: 2px;
	}

	@media (min-width: 500px) {
		.password {
			--cell-size: 3rem;
		}
	}

	@media (min-width: 750px) {
		.password {
			--cell-size: 4.5rem;
		}
	}

	@media (min-width: 1024px) {
		.password {
			--cell-size: 3rem;
			grid-template-columns: repeat(16, 1fr);
		}
	}

	@media (min-width: 1200px) {
		.password {
			--cell-size: 4rem;
		}
	}
</style>
