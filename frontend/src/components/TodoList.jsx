import { useState } from "react";
import { deleteTask, updateTask } from "../services/taskService";

export function TodoList({ tasks, setTasks, loading }) {

  const [deletingId, setDeletingId] = useState(null)
  const [updatingId, setUpdatingId] = useState(null)

  const handleDelete = async (id) => {
    try {
      setDeletingId(id)
      await deleteTask(id);

      setTasks((prevTasks) =>
        prevTasks.filter((task) => task._id !== id)
      );
    } catch (error) {
      console.error(error);
    } finally {
      setDeletingId(null)
    }
  };

  const handleToggle = async (task) => {
    try {
      setUpdatingId(task._id)
      const response = await updateTask(task._id, {
        completed: !task.completed,
      });

      setTasks((prevTasks) =>
        prevTasks.map((item) =>
          item._id === task._id
            ? response.data
            : item
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setUpdatingId(null)
    }
  };

  return (
    <>
      {loading ? (
        <p className="text-gray-400 text-sm">Loading tasks...</p>
      ) :
        (tasks.length === 0 ? (
          <p className="text-gray-500 text-sm">No tasks yet. Add one above.</p>
        ) : (
          <div className="divide-y divide-gray-800">
            {tasks.map((task) => (
              <div key={task._id} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={
                      "w-1.5 h-1.5 rounded-full shrink-0 " +
                      (task.completed ? "bg-green-500" : "bg-yellow-500")
                    }
                  />
                  <h3 className="text-gray-100 text-sm font-medium truncate">
                    {task.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 shrink-0 ml-4">
                  <button
                    className="text-sm font-medium text-gray-400 hover:text-green-400 cursor-pointer transition-colors disabled:text-gray-700 disabled:cursor-not-allowed"
                    onClick={() => handleToggle(task)}
                    disabled={updatingId === task._id}
                  >
                    {updatingId === task._id
                      ? "Updating..."
                      : task.completed ? "Undo" : "Complete"}
                  </button>

                  <button
                    className="text-sm font-medium text-gray-400 hover:text-red-400 cursor-pointer transition-colors disabled:text-gray-700 disabled:cursor-not-allowed"
                    onClick={() => handleDelete(task._id)}
                    disabled={deletingId === task._id}
                  >
                    {deletingId === task._id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
    </>
  )
}