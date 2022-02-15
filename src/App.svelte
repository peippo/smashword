<script lang="ts">
	import { tick } from "svelte";
	import {
		characterCount,
		maxLength,
		currentPassword,
		isNarrowScreen,
	} from "./store";
	import { PASSWORD_LIMITS } from "./utils/utils";

	import Logo from "./components/Logo.svelte";
	import Instructions from "./components/Instructions.svelte";
	import CharTypeSelect from "./components/CharTypeSelect.svelte";
	import Password from "./components/Password.svelte";
	import CopyPassword from "./components/CopyPassword.svelte";
	import TapButton from "./components/TapButton.svelte";

	let key: string;
	let screenWidth: number;

	$: $isNarrowScreen = screenWidth < 600;

	function addCharacter() {
		$characterCount += 1;
		updatePassword();
	}

	function decreaseLength() {
		$maxLength = Math.max(PASSWORD_LIMITS.MIN, $maxLength - 1);
		updatePassword();
	}

	function increaseLength() {
		$maxLength = Math.min(PASSWORD_LIMITS.MAX, $maxLength + 1);
	}

	function clear() {
		$characterCount = 0;
		updatePassword();
	}

	async function handleKeydown(event: KeyboardEvent) {
		key = event.key;
		const isEscape = key === "Escape";
		const isBackspace = key === "Backspace";
		const isArrowLeft = key === "ArrowLeft";
		const isArrowRight = key === "ArrowRight";
		const isBasicKey = /^[a-z0-9]$/i.test(key);

		if ($characterCount >= $maxLength && isBasicKey) return;

		if (isEscape) {
			clear();
		}

		if (isBackspace) {
			$characterCount = Math.max(0, $characterCount - 1);
		}

		if (isArrowLeft) {
			decreaseLength();
		}

		if (isArrowRight) {
			increaseLength();
		}

		if (isBasicKey) {
			addCharacter();
		}

		updatePassword();
	}

	async function updatePassword() {
		await tick();
		const passwordElement = document.getElementById("password");
		$currentPassword = passwordElement.innerText.replace(/\s/g, "");
	}
</script>

<svelte:window on:keydown={handleKeydown} bind:innerWidth={screenWidth} />

<main>
	<header>
		<Logo />
		<Instructions
			on:clear={clear}
			on:decrease-length={decreaseLength}
			on:increase-length={increaseLength}
		/>
		<CharTypeSelect {updatePassword} />
	</header>
	<Password />
	<CopyPassword />

	{#if $isNarrowScreen}
		<TapButton on:add={addCharacter} />
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	header {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
