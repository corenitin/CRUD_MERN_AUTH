import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { getCurrentUser } from "../services/authService";

function TodoPage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [sort, setSort] = useState("newest");

    const [user, setUser] = useState(null);

    const limit = 10;

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true);

                const response = await getTasks(page, limit, sort);

                setTasks(response.data.tasks);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, [page, sort]);

//Fetch the user  
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getCurrentUser();
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-[#111116]">

            <Sidebar user={user}/>

            <main className="ml-64 p-10">
                <div className="max-w-[700px] mx-auto">

                    <div className="flex justify-between items-center border-l-2 border-violet-500 pl-4 py-2">
                        <h1 className="text-3xl font-semibold text-gray-50">
                            Todos
                        </h1>

                        <div className="flex items-center gap-5">
                            <select
                                value={sort}
                                onChange={(e) => {
                                    setSort(e.target.value);
                                    setPage(1);
                                }}
                                className="bg-transparent border-b border-gray-700 text-gray-400 text-sm py-1 pr-1 outline-none focus:border-violet-500 cursor-pointer transition-colors [&>option]:bg-[#1a1a22] [&>option]:text-gray-50"
                            >
                                <option value="newest">Newest first</option>
                                <option value="oldest">Oldest first</option>
                                <option value="az">A → Z</option>
                                <option value="za">Z → A</option>
                                <option value="completed">Completed first</option>
                                <option value="pending">Pending first</option>
                            </select>

                            <button
                                onClick={handleLogout}
                                className="text-sm font-medium cursor-pointer text-gray-400 hover:text-violet-400 transition-colors"
                            >
                                Log out
                            </button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <TodoForm setTasks={setTasks} />
                    </div>

                    <div className="mt-10">
                        <TodoList
                            tasks={tasks}
                            setTasks={setTasks}
                            loading={loading}
                        />
                    </div>

                    {tasks.length !== 0 && (
                        <hr className="mt-6 border-gray-800" />
                    )}

                    <div className="flex justify-center items-center gap-6 mt-6">

                        <button
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                            className="cursor-pointer text-sm font-medium text-gray-400 hover:text-violet-400 disabled:text-gray-700 disabled:cursor-not-allowed transition-colors"
                        >
                            Previous
                        </button>

                        <span className="text-sm text-gray-500">
                            Page {page} of {totalPages}
                        </span>

                        <button
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                            className="cursor-pointer text-sm font-medium text-gray-400 hover:text-violet-400 disabled:text-gray-700 disabled:cursor-not-allowed transition-colors"
                        >
                            Next
                        </button>

                    </div>

                </div>
            </main>

        </div>
    );
}

export default TodoPage;