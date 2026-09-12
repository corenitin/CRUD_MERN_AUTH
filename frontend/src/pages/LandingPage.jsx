import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#111116]">

            {/* Navbar */}
            <nav className="flex justify-between items-center px-10 py-6">
                <h1 className="text-2xl font-semibold text-gray-50">
                    TodoApp
                </h1>

                <div className="flex items-center gap-6">
                    <Link
                        to="/login"
                        className="text-sm font-medium text-gray-400 hover:text-violet-400 transition-colors"
                    >
                        Log in
                    </Link>

                    <Link
                        to="/register"
                        className="px-5 py-2 bg-violet-600 hover:bg-violet-500 text-gray-50 text-sm font-medium transition-colors"
                    >
                        Get started
                    </Link>
                </div>
            </nav>

            {/* Hero */}
            <main className="flex flex-col items-center text-center px-6 pt-24">

                <h2 className="text-5xl font-semibold max-w-3xl text-gray-50">
                    Organize your tasks.
                    <span className="text-violet-400">
                        {" "}Get things done.
                    </span>
                </h2>

                <p className="mt-6 text-lg text-gray-400 max-w-2xl">
                    A simple and powerful todo app to manage your
                    daily tasks, stay organized, and get more done.
                </p>

                <div className="flex gap-4 mt-8">

                    <Link
                        to="/register"
                        className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-gray-50 font-medium transition-colors"
                    >
                        Start for free
                    </Link>

                    <Link
                        to="/login"
                        className="px-6 py-3 text-gray-300 border-b border-gray-700 hover:border-violet-500 hover:text-violet-400 transition-colors"
                    >
                        Log in
                    </Link>

                </div>

            </main>

            {/* Stats */}
            <section className="max-w-4xl mx-auto px-6 mt-28">
                <div className="grid grid-cols-3 divide-x divide-gray-800 border-y border-gray-800 py-8">
                    <div className="text-center">
                        <p className="text-3xl font-semibold text-gray-50">12k+</p>
                        <p className="mt-1 text-sm text-gray-500">Tasks completed</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-semibold text-gray-50">3,400</p>
                        <p className="mt-1 text-sm text-gray-500">Active users</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-semibold text-gray-50">99.9%</p>
                        <p className="mt-1 text-sm text-gray-500">Uptime</p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="max-w-5xl mx-auto px-6 mt-28">
                <h3 className="text-sm font-medium text-gray-500 border-l-2 border-violet-500 pl-4">
                    Why TodoApp
                </h3>

                <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 mt-8">

                    <div className="border-l-2 border-violet-500 pl-5">
                        <h3 className="text-lg font-semibold text-gray-50">
                            Simple
                        </h3>

                        <p className="mt-2 text-sm text-gray-400">
                            Create and manage your tasks with a
                            clean and simple interface.
                        </p>
                    </div>

                    <div className="border-l-2 border-violet-500 pl-5">
                        <h3 className="text-lg font-semibold text-gray-50">
                            Organized
                        </h3>

                        <p className="mt-2 text-sm text-gray-400">
                            Sort and paginate your tasks to keep
                            everything easy to manage.
                        </p>
                    </div>

                    <div className="border-l-2 border-violet-500 pl-5">
                        <h3 className="text-lg font-semibold text-gray-50">
                            Secure
                        </h3>

                        <p className="mt-2 text-sm text-gray-400">
                            Your tasks are connected to your account
                            and protected by authentication.
                        </p>
                    </div>

                </div>
            </section>

            {/* How it works */}
            <section className="max-w-5xl mx-auto px-6 mt-28">
                <h3 className="text-sm font-medium text-gray-500 border-l-2 border-violet-500 pl-4">
                    How it works
                </h3>

                <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 mt-8">

                    <div>
                        <p className="text-sm text-violet-400 font-medium">01</p>
                        <h3 className="mt-2 text-lg font-semibold text-gray-50">
                            Create an account
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Sign up in seconds, no credit card required.
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-violet-400 font-medium">02</p>
                        <h3 className="mt-2 text-lg font-semibold text-gray-50">
                            Add your tasks
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Write down what you need to do, whenever it comes to mind.
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-violet-400 font-medium">03</p>
                        <h3 className="mt-2 text-lg font-semibold text-gray-50">
                            Get things done
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Sort, complete, and clear your list as you go.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="max-w-3xl mx-auto px-6 mt-28 pb-24 text-center">
                <h3 className="text-3xl font-semibold text-gray-50">
                    Start organizing today.
                </h3>
                <p className="mt-4 text-gray-400">
                    Free to use. Takes less than a minute to set up.
                </p>

                <Link
                    to="/register"
                    className="inline-block mt-8 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-gray-50 font-medium transition-colors"
                >
                    Create your account
                </Link>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 px-10 py-8 flex justify-between items-center">
                <p className="text-sm text-gray-500">© 2026 TodoApp</p>
                <div className="flex gap-6">
                    <Link
                        to="/login"
                        className="text-sm text-gray-500 hover:text-violet-400 transition-colors"
                    >
                        Log in
                    </Link>
                    <Link
                        to="/register"
                        className="text-sm text-gray-500 hover:text-violet-400 transition-colors"
                    >
                        Get started
                    </Link>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;