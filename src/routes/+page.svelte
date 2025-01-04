<script>
    let todos = [];

    function addTodo() {
        todos = [...todos, ''];
    }
    
    function removeTodo(index) {
        todos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    }
</script>
<h1>Todo List</h1>
{#each todos as todo, index}
    <input bind:value={todos[index]}>
    <button on:click={() => removeTodo(index)}>X</button>
    <br/>
{/each}

<button on:click={addTodo}>Add Note</button>
