<script type="ts">
	import { allCharTypes } from "../utils/utils";
	import { selectedTypes } from "../store";
	let types = [...allCharTypes];
</script>

<form>
	{#each types as type}
		<label>
			<input
				bind:group={$selectedTypes}
				type="checkbox"
				disabled={$selectedTypes.length === 1 &&
					$selectedTypes.includes(type)}
				name="char-types"
				value={type}
			/>
			{type}
		</label>
	{/each}
</form>

<style>
	form {
		display: flex;
		gap: 1rem;
	}

	label {
		text-transform: capitalize;
	}

	label:hover {
		cursor: pointer;
	}
</style>
