import { useState } from "react";
import { createTask } from "../services/taskService";

export function TodoForm({setTasks}) {

      const [title, setTitle] = useState("");
      const [adding, setAdding] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        try {
            setAdding(true);

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
        }finally {
            setAdding(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-3">
            <input
                className="flex-1 bg-transparent border-b border-gray-700 text-gray-50 placeholder-gray-600 text-sm py-2 outline-none focus:border-violet-500 transition-colors"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task"
            />

            <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 disabled:cursor-not-allowed text-gray-50 text-sm font-medium px-4 transition-colors"
                disabled={adding}
            >
                {adding ? "Adding..." : "Add"}
            </button>
        </form>
    )
}