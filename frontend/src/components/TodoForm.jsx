import { useState } from "react";
import { createTask } from "../services/taskService";

export function TodoForm({setTasks}) {

      const [title, setTitle] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        try {
            const response = await createTask({
                title: title,
            });

            setTasks((prevTasks) => [
                response.data,
                ...prevTasks,
            ]);

            setTitle("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                className="text-gray-400 font-medium text-sm m-2 py-1 px-3 w-xl border border-gray-500 rounded-md"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task"
            />

            <button
                type="submit"
                className="bg-purple-800 hover:bg-purple-700 font-medium text-sm text-gray-200 m-2 py-1 px-3 cursor-pointer border-gray-500 rounded-md"
            >
                Add Todo
            </button>
        </form>
    )
}