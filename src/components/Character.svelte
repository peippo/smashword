<script type="ts">
	import { chars, pickRandomChar } from "../utils/utils";
	import { selectedTypes } from "../store";

	let randomChar: string;

	$: availableChars = $selectedTypes.map((type) => chars[type]).join("");
	$: randomChar = pickRandomChar(availableChars);
</script>

<span>{randomChar}</span>
