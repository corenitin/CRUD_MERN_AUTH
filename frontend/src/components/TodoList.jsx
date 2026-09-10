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
    }finally {
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
    }finally{
      setUpdatingId(null)
    }
  };

  return (
    <>
      {loading ? (
        <p className="text-gray-400 m-2">Loading List...</p>
      ) :
        (tasks.map((task, index) => (
          <div key={task._id} className="flex items-baseline justify-between my-5">
            <span className="text-gray-100 text-sm font-medium m-2">{index + 1}</span>
            <h3 className=" text-gray-100 w-xs text-sm font-medium m-2 h-auto">{task.title}</h3>
            <p className="text-sm">
              {task.completed
                ? <span className="text-green-500 font-medium m-2">Completed!</span>
                : <span className="text-yellow-500 font-medium m-2">Pending!</span>}
            </p>

            <div className="flex-end flex ">
              <button
                className={
                  task.completed
                    ? "bg-yellow-800 hover:bg-yellow-700 text-sm font-medium text-gray-200 m-2 py-1 px-3 cursor-pointer border-gray-500 rounded-md"
                    : "bg-green-800 hover:bg-green-700 text-sm font-medium text-gray-200 m-2 py-1 px-3 cursor-pointer border-gray-500 rounded-md"}
                onClick={() => handleToggle(task)}
                disabled={updatingId === task._id}
              >
                {updatingId === task._id 
                  ? "Updating..." 
                  : task.completed ? "Undo" : "Complete"}
              </button>

              <button
                className="bg-red-800 hover:bg-red-700 text-sm font-medium text-gray-200 m-2 py-1 px-3 cursor-pointer border-gray-500 rounded-md"
                onClick={() => handleDelete(task._id)}
                disabled={deletingId === task._id}
              >
                {deletingId === task._id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        )))}

    </>
  )
}