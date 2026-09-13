import { Link, useNavigate } from "react-router-dom";

export const Sidebar = ({user}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#111116] border-r border-gray-800 flex flex-col">

            {/* Logo */}
            <div className="px-6 py-6">
                <h1 className="text-lg font-semibold text-gray-50">
                    ✓ TodoApp
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4">

                <Link
                    to="/todos"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                >
                    <span>✓</span>
                    My Todos
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-2.5 mt-1 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                >
                    <span>⌂</span>
                    Home
                </Link>

            </nav>
            <div className="px-4 py-4 border-t border-gray-800 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-gray-50 text-sm font-medium shrink-0">
                    {user?.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm text-gray-300 truncate">{user?.name || "User"}</span>
            </div>

            {/* Bottom */}
            <div className="p-4 border-t border-gray-800">

                <button
                    onClick={handleLogout}
                    className="cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 hover:text-red-400 transition-colors"
                >
                    <span>↪</span>
                    Logout
                </button>

            </div>

        </aside>
    );
};