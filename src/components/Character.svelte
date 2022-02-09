<script type="ts">
	import { fly } from "svelte/transition";

	import { chars, pickRandomChar } from "../utils/utils";
	import { selectedTypes } from "../store";

	let randomChar: string;

	$: availableChars = $selectedTypes.map((type) => chars[type]).join("");
	$: randomChar = pickRandomChar(availableChars);
</script>

<span in:fly={{ duration: 200, y: -10 }}>{randomChar}</span>

<style>
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--cell-size);
		height: var(--cell-size);
		background-color: var(--color-blue);
		color: var(--color-yellow);
		border: 1px solid var(--color-blue);
		border-radius: 3px;
	}
</style>
