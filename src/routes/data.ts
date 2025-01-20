

import ArrowDown from "svelte-radix/ArrowDown.svelte";
import ArrowRight from "svelte-radix/ArrowRight.svelte";
import ArrowUp from "svelte-radix/ArrowUp.svelte";
import CheckCircled from "svelte-radix/CheckCircled.svelte";
import Circle from "svelte-radix/Circle.svelte";
import CrossCircled from "svelte-radix/CrossCircled.svelte";
import Stopwatch from "svelte-radix/Stopwatch.svelte";

export type Todo = {
    id: string;
    title: string;
    status: "In Progress" | "Canceled" | "Done" | "To Do";
    label: "Work" | "Exercise" | "Other";
    priority: "Low" | "Medium" | "High";
  };
 
export const data: Todo[] = [
    {
        id: "TASK-101",
        title: "Create a presentation slide!",
        status: "In Progress",
        label: "Work",
        priority: "High",
    },
    {
        id: "TASK-102",
        title: "Complete the report",
        status: "Canceled",
        label: "Work",
        priority: "Low",
    },
    {
        id: "TASK-103",
        title: "Buy groceries",
        status: "Done",
        label: "Other",
        priority: "Medium",
    },
    {
        id: "TASK-104",
        title: "Solve a coding kata from Codewars (7kyu/6kyu)",
        status: "To Do",
        label: "Exercise",
        priority: "High",
    },
    {
        id: "TASK-105",
        title: "Review the code of my favorite project",
        status: "To Do",
        label: "Work",
        priority: "Low",
    },
    {
        id: "TASK-106",
        title: "Write a blog post",
        status: "To Do",
        label: "Work",
        priority: "Medium",
    },
    {
        id: "TASK-107",
        title: "Debug a JavaScript code",
        status: "In Progress",
        label: "Exercise",
        priority: "Medium",
    },
    {
        id: "TASK-108",
        title: "Create a new feature in my web application",
        status: "To Do",
        label: "Work",
        priority: "High",
    },
    {
        id: "TASK-109",
        title: "Update the design of my website",
        status: "To Do",
        label: "Work",
        priority: "Low",
    }
];

export const labels = [
	{
		value: "work",
		label: "Work",
	},
	{
		value: "exercise",
		label: "Exercise",
	},
	{
		value: "other",
		label: "Other",
	},
];

export const statuses = [
	{
		value: "todo",
		label: "To Do",
		icon: Circle,
	},
	{
		value: "in progress",
		label: "In Progress",
		icon: Stopwatch,
	},
	{
		value: "done",
		label: "Done",
		icon: CheckCircled,
	},
	{
		value: "canceled",
		label: "Canceled",
		icon: CrossCircled,
	},
];

export const priorities = [
	{
		label: "Low",
		value: "low",
		icon: ArrowDown,
	},
	{
		label: "Medium",
		value: "medium",
		icon: ArrowRight,
	},
	{
		label: "High",
		value: "high",
		icon: ArrowUp,
	},
];