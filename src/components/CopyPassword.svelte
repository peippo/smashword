<script lang="ts">
	import { fade, fly } from "svelte/transition";

	let isSuccess = false;
	let isError = false;

	function copyText() {
		const passwordElement = document.getElementById("password");
		const text = passwordElement.innerText.replace(/\s/g, "");

		navigator.clipboard.writeText(text).then(
			function () {
				isSuccess = true;

				setTimeout(() => {
					isSuccess = false;
				}, 1000);
			},

			function () {
				isError = true;
			}
		);
	}
</script>

<div class="container">
	{#if isSuccess}
		<div
			in:fly={{ duration: 200, y: 5 }}
			out:fade={{ duration: 200 }}
			class="popup"
		>
			Copied!
		</div>
	{/if}

	<button disabled={isError} on:click={copyText}>
		{isError ? "Sorry, unable to copy :(" : "Copy password"}
	</button>
</div>

<style>
	.container {
		margin: 2rem 0 1rem;
		position: relative;
	}

	.popup {
		position: absolute;
		left: 50%;
		top: -100%;
		transform: translateX(-50%);
		background-color: var(--color-green);
		padding: 0.25rem 0.5rem;
		color: #fff;
		border-bottom: 2px solid var(--color-blue);
		border-radius: 3px;
	}

	.popup::after {
		content: "";
		position: absolute;
		left: 50%;
		top: 100%;
		width: 8px;
		height: 8px;
		transform: translateX(-50%);
		border-top: 8px solid var(--color-blue);
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 8px solid transparent;
	}
</style>
