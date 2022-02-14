<script type="ts">
	import { allCharTypes } from "../utils/utils";
	import { selectedTypes } from "../store";
	
	export let updatePassword;

	let types = [...allCharTypes];
</script>

<fieldset>
	<legend>Select character types</legend>
	<form>
		{#each types as type}
			<div class="wrapper">
				<input
					id={`input-${type}`}
					bind:group={$selectedTypes}
					type="checkbox"
					disabled={$selectedTypes.length === 1 &&
						$selectedTypes.includes(type)}
					name="char-types"
					value={type}
					on:change={updatePassword}
				/>
				<label for={`input-${type}`}>
					{type}
				</label>
			</div>
		{/each}
	</form>
</fieldset>

<style>
	fieldset {
		margin: 2rem 0 1rem;
		padding: 1rem 2rem;
		border-top: 6px solid var(--color-blue);
		border-right: 1px solid var(--color-blue);
		border-left: 1px solid var(--color-blue);
		border-bottom: 0;
	}

	legend {
		color: var(--color-blue);
		padding: 0 0.75rem;
	}

	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 1rem;
	}

	@media (min-width: 750px) {
		form {
			display: flex;
			flex-direction: column;
			flex-direction: row;
		}
	}

	.wrapper {
		--input-size: 1.5rem;
		position: relative;
	}

	input {
		width: var(--input-size);
		height: var(--input-size);
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
	}

	input:not(:checked) + label {
		text-decoration: line-through;
	}

	input:checked + label::after {
		opacity: 1;
	}

	input:focus + label::before {
		outline: 2px dotted var(--color-blue);
		outline-offset: 2px;
	}

	input:focus:not(:focus-visible) + label::before {
		outline: none;
	}

	input:disabled + label::after {
		background-color: var(--color-gray);
	}

	input:disabled + label {
		color: #136064;
	}

	input:disabled:hover,
	input:disabled + label:hover {
		cursor: not-allowed;
	}

	label {
		text-transform: capitalize;
		padding-left: calc(var(--input-size) * 1.25);
	}

	label::before {
		background-color: var(--color-blue);
		content: "";
		width: var(--input-size);
		height: var(--input-size);
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}

	label::after {
		content: "";
		width: calc(var(--input-size) * 0.5);
		height: calc(var(--input-size) * 0.5);
		position: absolute;
		top: 50%;
		left: calc(var(--input-size) * 0.25);
		opacity: 0;
		transform: translateY(-50%);
		transition: opacity 0.2s ease-in-out;
		background-color: var(--color-purple);
	}

	label:hover {
		cursor: pointer;
	}
</style>
