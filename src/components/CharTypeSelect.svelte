<script type="ts">
	import { allCharTypes } from "../utils/utils";
	import { selectedTypes } from "../store";
	let types = [...allCharTypes];
</script>

<section>
	<h2 class="screen-reader-text">Toggle character types</h2>
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
				/>
				<label for={`input-${type}`}>
					{type}
				</label>
			</div>
		{/each}
	</form>
</section>

<style>
	section {
		margin: 2rem 0 3rem;
	}

	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 1rem;
	}

	@media (min-width: 600px) {
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

	input:checked + label::after {
		opacity: 1;
	}

	input:hover + label::after,
	label:hover::after {
		opacity: 1;
		background-color: var(--color-yellow);
	}

	input:focus + label::before {
		outline: 2px dotted var(--color-blue);
		outline-offset: 2px;
	}

	input:focus:not(:focus-visible) + label::before {
		outline: none;
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
