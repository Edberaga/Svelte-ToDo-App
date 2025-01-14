<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>Edbert Todo App</title>
</svelte:head>

<main>
	<slot />
</main>

<style>
	:global(html, body) {
		height: 100%;
	}

	:global(body) {
		padding-top: 50px;
		font-family: 'Manrope Variable', sans-serif;
		background-color: hsl(220 10% 8%);
	}

	/*Media Queries*/
	@media (max-width: 768px) {
    }
</style>
