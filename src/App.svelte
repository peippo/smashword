<script lang="ts">
	import { characterCount, maxLength } from "./store";
	import { PASSWORD_LIMITS } from "./utils/utils";

	import Logo from "./components/Logo.svelte";
	import Instructions from "./components/Instructions.svelte";
	import CharTypeSelect from "./components/CharTypeSelect.svelte";
	import Password from "./components/Password.svelte";

	let key: string;

	function decreaseLength() {
		$maxLength = Math.max(PASSWORD_LIMITS.MIN, $maxLength - 1);
	}

	function increaseLength() {
		$maxLength = Math.min(PASSWORD_LIMITS.MAX, $maxLength + 1);
	}

	function clear() {
		$characterCount = 0;
	}

	function handleKeydown(event: KeyboardEvent) {
		key = event.key;
		const isEscape = key === "Escape";
		const isBackspace = key === "Backspace";
		const isArrowLeft = key === "ArrowLeft";
		const isArrowRight = key === "ArrowRight";
		const isTab = key === "Tab";

		const isSpecialKey =
			isEscape || isBackspace || isArrowLeft || isArrowRight || isTab;

		if ($characterCount >= $maxLength && !isSpecialKey) return;

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

		if (!isSpecialKey) {
			$characterCount += 1;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<main>
	<Logo />
	<Instructions
		on:clear={clear}
		on:decrease-length={decreaseLength}
		on:increase-length={increaseLength}
	/>
	<CharTypeSelect />
	<Password />
</main>
