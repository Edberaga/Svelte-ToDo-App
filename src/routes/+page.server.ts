import { data } from "./data";

export function load() {
    return  {
        summaries: data.map((todo) => ({
            id: todo.id,
            title: todo.title,
            label: todo.label,
            status: todo.status,
            priority: todo.priority,
        }))
    }
}