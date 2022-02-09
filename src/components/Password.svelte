<script type="ts">
	import Character from "./Character.svelte";
	import CharacterPlaceholder from "./CharacterPlaceholder.svelte";
	import { characterCount, maxLength } from "../store";

	$: if ($characterCount > $maxLength) {
		$characterCount = $maxLength;
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
