<script lang="ts">
	import DataTable from "./todos/todo-table.svelte";
	import '../app.css';
</script>

<svelte:head>
	<title>Edbert Todo App</title>
</svelte:head>

<div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
	<div class="flex items-center justify-between space-y-2">
		<div>
			<h1 class="text-4xl font-bold tracking-tight text-white">Welcome back!</h1>
			<p class="text-muted-foreground">Here's a list of your tasks for this month!</p>
		</div>
		<div class="flex items-center space-x-2">
			
		</div>
	</div>
	<DataTable />
</div>

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