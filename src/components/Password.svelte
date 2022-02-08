<script type="ts">
	import Character from "./Character.svelte";
	import CharacterPlaceholder from "./CharacterPlaceholder.svelte";
	import { characters, maxLength } from "../store";

	$: if ($characters > $maxLength) {
		$characters = $maxLength;
	}
</script>

<div>
	{#each Array($maxLength) as character, index}
		<svelte:component
			this={index < $characters ? Character : CharacterPlaceholder}
		/>
	{/each}
</div>

<style>
	div {
		display: flex;
	}
</style>
