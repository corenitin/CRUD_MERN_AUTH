import { useEffect, useState } from "react";
import { getTasks } from "./services/taskService";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks()
  }, []);



  return (
    <div className="p-10 flex justify-center items-center">
      <div className="w-[700px]">
        <div>
          <h1 className="m-2 text-4xl font-bold text-purple-500">Todos</h1>
          <TodoForm setTasks={setTasks}/>
        </div>

        <div className="mt-10 max-h-[600px] overflow-auto h-auto">
          <TodoList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;