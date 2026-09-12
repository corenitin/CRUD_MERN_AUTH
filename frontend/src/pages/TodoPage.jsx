import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";
import { useNavigate } from "react-router-dom";

function TodoPage() {
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
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-[#111116] p-10 flex justify-center">

            <div className="w-full max-w-[700px]">

                <div>
                    <div className="flex justify-between items-center border-l-2 border-violet-500 pl-4 py-2">
                       <h1 className="text-3xl font-semibold text-gray-50">
                        Todos
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="text-sm font-medium cursor-pointer text-gray-400 hover:text-violet-400 transition-colors"
                    >
                        Log out
                    </button> 
                    </div>
                    

                    <div className="mt-8">
                        <TodoForm setTasks={setTasks} />
                    </div>
                </div>

                <div className="mt-10 max-h-[600px] overflow-auto h-auto scroll-smooth">
                    <TodoList
                        tasks={tasks}
                        setTasks={setTasks}
                        loading={loading}
                    />
                </div>

                {tasks.length !== 0 && (
                    <hr className="mt-6 border-gray-800" />
                )}

            </div>
        </div>
    );
}

export default TodoPage;