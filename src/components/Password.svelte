<script type="ts">
	import Character from "./Character.svelte";
	import CharacterPlaceholder from "./CharacterPlaceholder.svelte";
	import { characterCount, maxLength } from "../store";

	$: if ($characterCount > $maxLength) {
		$characterCount = $maxLength;
	}
</script>

<div class="password">
	{#each Array($maxLength) as character, index}
		<svelte:component
			this={index < $characterCount ? Character : CharacterPlaceholder}
		/>
	{/each}
</div>

<style>
	.password {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: 1fr 1fr;
		gap: 2px;
	}

	@media (min-width: 1024px) {
		.password {
			grid-template-columns: repeat(16, 1fr);
		}
	}
	}
</style>
