<script type="ts">
	import { maxLength } from "../store";
</script>

<input type="range" min="8" max="64" step="4" bind:value={$maxLength} />
