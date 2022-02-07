<script type="ts">
	import Character from "./Character.svelte";
	import CharacterPlaceholder from "./CharacterPlaceholder.svelte";
	import { characters, maxLength } from "../store";

	let key: string;

	$: if ($characters > $maxLength) {
		$characters = $maxLength;
	}

	function handleKeydown(event: KeyboardEvent) {
		key = event.key;
		const isEscape = key === "Escape";
		const isBackspace = key === "Backspace";

		if ($characters >= $maxLength && !isEscape && !isBackspace) return;

		if (isEscape) {
			$characters = 0;
		} else if (isBackspace) {
			$characters = Math.max(0, $characters - 1);
		} else {
			$characters += 1;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

	{#each Array($maxLength) as character, index}
		<svelte:component
			this={index < $characters ? Character : CharacterPlaceholder}
		/>
	{/each}
