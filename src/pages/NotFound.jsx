import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-center px-6">
      <h1 className="text-7xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}
