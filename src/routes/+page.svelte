<script lang="ts">
import DataTable from "./todo-table.svelte";
import '../app.css'
let { data } = $props();
console.log(data.summaries);
</script>

<div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
	<div class="flex items-center justify-between space-y-2">
		<div>
			<h1 class="text-4xl font-bold tracking-tight text-white">Welcome back!</h1>
			<p class="text-muted-foreground">Here's a list of your tasks for this month!</p>
		</div>
		<div class="flex items-center space-x-2">
			
		</div>
	</div>
	<DataTable {data}/>
</div>