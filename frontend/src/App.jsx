import { useEffect, useState } from "react";
import { getTasks } from "./services/taskService";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        const response = await getTasks();
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    };
    fetchTasks()
  }, []);



  return (
    <div className="p-10 flex justify-center items-center">
      <div className="w-[700px]">
        <div>
          <h1 className="m-2 text-4xl font-bold text-purple-500">Todos</h1>
          <TodoForm setTasks={setTasks} />
        </div>

        <div className="mt-10 max-h-[600px] overflow-auto h-auto scroll-smooth">
          <TodoList tasks={tasks} setTasks={setTasks} loading={loading} />
        </div>
        {tasks.length == 0
          ? (<></>)
          : (<hr className="m-2 w-2xl text-gray-500" />)
        }

      </div>
    </div>
  );
}

export default App;