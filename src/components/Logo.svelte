<script lang="ts">
	import { characterCount } from "../store";

	// TODO: Use password strength instead of length

	let lockClass: string;

	$: if ($characterCount > 16) {
		lockClass = "lock-color--green";
	} else if ($characterCount > 8) {
		lockClass = "lock-color--yellow";
	} else if ($characterCount > 0) {
		lockClass = "lock-color--red";
	} else {
		lockClass = null;
	}
</script>

<h1 class="screen-reader-text">Smashword</h1>
<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1025.4 125"
	xml:space="preserve"
>
	<path class="text-color" fill="#6154A0" d="M12.6 12.6h988v87.8h-988z" />
	<path
		class={`lock-color ${lockClass}`}
		fill="#6154A0"
		d="M237.7 12.3h87.5v88.1h-87.5z"
	/>
	<path
		class="lock-shadow"
		fill="#000"
		opacity="0.3"
		d="M287.6 62.6h12.6v25h-12.6zM237.5 50.2h12.6v50.1h-12.6zM300.1 24.8h12.6v25.4h-12.6zM250.2 24.8h12.6v12.6h-12.6z"
	/>
	<g class="outline" fill="#00003E">
		<path
			d="M275 75.3v12.5h12.6V62.6H275zM713 24.8h37.4v62.7H713zM825.6 24.8H863v25.1h-37.4z"
		/>
		<path
			d="M175 0v12.6h-12.6V0h-49.9v12.6H100V0H12.6v12.6H0v87.5h12.6v12.2h12.5v12.4h87.5v-12.4h12.5v12.4H175v-12.4h12.6v12.4l162.4.3v-12.7h12.8v12.4h87.5v-12.4h12.5v12.4h49.9v-12.4h12.6v12.4h100v-12.4h12.6v12.4h49.9v-12.4h12.8v12.4h87.5v-12.4h12.6v12.4h49.9v-12.4h12.6v12.4h137.6v-12.4h12.5v-12.2h12.3V37.4h-12.3V24.8h-12.5V12.6H988V0h-87.5v12.6H888V0H787.9v12.6h-12.5V0h-87.5v12.6h-12.5V0h-50.1v12.6h-12.6V0h-100v12.6h-12.6V0h-49.9v12.6h-12.5V0h-87.5v12.6h-12.5V0H175zm62.7 24.9h12.5V12.3h62.4v12.6h12.5v75.5h-87.5V50.2h62.5V24.9h-37.4v12.6h-25.1l.1-12.6M100.1 37.4H75V24.8H37.6v25.1h49.9v12.5h12.6v25.1H87.5v12.6H25.1V87.5H12.6V75h25.1v12.5H75V62.4H25.1V49.9H12.6V24.8h12.5V12.6h62.4v12.2h12.6v12.6zm112.5 62.7h-25.1V49.9H175v12.5h-12.6V49.9h-12.2V100h-25.1V12.6h25.1v12.2h12.2v12.6H175V24.8h12.6V12.6h25.1v87.5zm225.2-62.7h-25.1V24.8h-37.4v25.1h49.9v12.5h12.6v25.1h-12.6v12.6h-62.4V87.5h-12.5V75h25.1v12.5h37.4V62.4h-49.9V49.9h-12.5V24.8h12.5V12.6h62.4v12.2h12.6v12.6zm112.5 62.7h-25.1V62.4h-37.4V100h-25.1V12.6h25.1V50h37.4V12.6h25.1v87.5zm112.6 0h-25.1V87.5h-12.6V75h-12.6v12.5h-12.2v12.6h-25.1V12.6h25.1v49.9h12.2V49.9h12.6v12.5h12.6V12.6h25.1v87.5zm112.5-12.6h-12.6v12.6h-62.4V87.5h-12.5V24.8h12.5V12.6h62.4v12.2h12.6v62.7zM888 49.9h-12.6v12.5H888V100h-25.1V62.4h-37.4V100h-25.1V12.6h74.9v12.2H888v25.1zM1000.6 75H988v12.5h-12.5v12.6h-62.4V12.6h62.4v12.2H988v12.6h12.6V75z"
		/>
		<path d="M962.9 24.8h-24.8v62.7h24.8V75h12.6V37.4h-12.6z" />
	</g>
	<path
		class="text-shadow"
		fill="#292966"
		d="M362.8 75h12.6v12.5h-12.6zM412.7 24.8h12.6v12.5h-12.6zM150 37.7h12.6v12.5H150zM75 25.1h12.6v12.5H75zM25.1 75h12.6v12.5H25.1zM175 37.7h12.6v12.5H175zM625.2 62.4h12.6V75h-12.6zM862.9 49.9h12.5v12.5h-12.5zM600.3 62.4h12.6V75h-12.6z"
	/>
</svg>

<style>
	svg {
		max-width: 800px;
		margin-bottom: 0.5rem;
	}

	.lock-color {
		transition: fill 0.5s;
	}

	.lock-color--red {
		fill: rgb(233, 79, 19);
	}

	.lock-color--yellow {
		fill: rgb(231, 212, 0);
	}

	.lock-color--green {
		fill: rgb(146, 219, 11);
	}
</style>
