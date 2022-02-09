<script type="ts">
	import { fade } from "svelte/transition";
</script>

<span in:fade={{ duration: 500 }} />

<style>
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--cell-size);
		height: var(--cell-size);
		border: 1px solid var(--color-blue);
		border-radius: 3px;
	}
</style>
