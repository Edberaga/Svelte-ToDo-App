<script lang="ts">
    import ArrowUpDown from "lucide-svelte/icons/arrow-up-down";
    import ChevronDown from "lucide-svelte/icons/chevron-down";
    import { Render, Subscribe } from "svelte-headless-table";
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input/index.js";
    
    import { columns, table } from "./data";
    import * as Table from "$lib/components/ui/table";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, flatColumns } = table.createViewModel(columns);
  const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
  const { filterValue } = pluginStates.filter;
  const { hiddenColumnIds } = pluginStates.hide;

  const ids = flatColumns.map((col) => col.id);
  let hideForId = Object.fromEntries(ids.map((id) => [id, true]));
 
  $: $hiddenColumnIds = Object.entries(hideForId)
    .filter(([, hide]) => !hide)
    .map(([id]) => id);
 
  const hidableCols = ["id", "status", "priority"];
</script>

<main>
  <div class="flex items-center py-4">
    <Input
      class="max-w-sm bg-black text-white"
      placeholder="Filter Todo..."
      type="text"
      bind:value={$filterValue}
    />
    <Button
      class="mx-2 bg-blue-500 text-white px-5 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700"
      on:click={() => {
        
    }}>
      Add new Todo
    </Button>

    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild let:builder>
        <Button variant="outline" class="ml-auto" builders={[builder]}>
          View Columns <ChevronDown class="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {#each flatColumns as col}
          {#if hidableCols.includes(col.id)}
            <DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
              {col.header}
            </DropdownMenu.CheckboxItem>
          {/if}
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
  <section class="text-white rounded-md border">
    <Table.Root {...$tableAttrs}>
      <Table.Header>
      {#each $headerRows as headerRow}
      <Subscribe rowAttrs={headerRow.attrs()}>
        <Table.Row>
        {#each headerRow.cells as cell (cell.id)}
          <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
            <Table.Head {...attrs}>
            {#if cell.id === "title"}
              <Button class="px-0" variant="ghost" on:click={props.sort.toggle}>
                <Render of={cell.render()} />
                <ArrowUpDown class={"ml-2 h-4 w-4"} />
              </Button>
            {:else}
              <Render of={cell.render()} />
            {/if}
            </Table.Head>
          </Subscribe>
        {/each}
        </Table.Row>
      </Subscribe>
      {/each}
      </Table.Header>

      <Table.Body {...$tableBodyAttrs}>
      {#each $pageRows as row (row.id)}
      <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
        <Table.Row {...rowAttrs}>
        {#each row.cells as cell (cell.id)}
          <Subscribe attrs={cell.attrs()} let:attrs>
            <Table.Cell {...attrs}> 
              <Render of={cell.render()} />
            </Table.Cell>
          </Subscribe>
        {/each}
        </Table.Row>
      </Subscribe>
      {/each}
      </Table.Body>
    </Table.Root>
  </section>

  <!--Pagination Section-->
  <section class="flex items-center justify-end space-x-4 py-4">
    <Button
      variant="outline"
      class="w-[100px]"
      size="sm"
      on:click={() => ($pageIndex = $pageIndex - 1)}
      disabled={!$hasPreviousPage}>Previous</Button
    >
    <Button
      variant="outline"
      class="w-[100px]"
      size="sm"
      disabled={!$hasNextPage}
      on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
    >
  </section>
</main>
