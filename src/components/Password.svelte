<script type="ts">
	import Character from "./Character.svelte";

	let maxCharacters: number = 16;
	let characters: number = 0;
	let key: string;

	function handleKeydown(event: KeyboardEvent) {
		key = event.key;
		const isEscape = key === "Escape";
		const isBackspace = key === "Backspace";

		if (characters === maxCharacters && !isEscape && !isBackspace) return;

		if (isEscape) {
			characters = 0;
		} else if (isBackspace) {
			characters = Math.max(0, characters - 1);
		} else {
			characters += 1;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#each Array(characters) as character}
	<Character />
{/each}
