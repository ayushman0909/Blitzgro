import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-100 dark:bg-black w-full border border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 border-t border-gray-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-green-800 dark:text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-800 dark:text-gray-400 mb-6 max-w-lg">
                Get the latest updates, tips, and exclusive content delivered
                straight to your inbox. Join our newsletter and never miss
                important announcements.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-gray-800 dark:text-gray-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            <div>
              <h4 className="text-md font-extrabold  text-green-800  dark:text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link onClick={() => window.scrollTo(0, 0)}
                    to="/home"
                    className="text-sm text-gray-800 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo(0, 0)}
                    to="/services"
                    className="text-sm text-gray-800 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo(0, 0)}
                    to="/about-us"
                    className="text-sm text-gray-800 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo(0, 0)}
                    to="contact-us"
                    className="text-sm text-gray-800 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-black dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-3 text-gray-800 dark:text-gray-400">
              © 2026 BlitzGro. All rights reserved.
            </p>
            <div className="flex justify-center   space-x-4 lg:pt-0 lg:col-end-13">
              <Link
                to="https://www.linkedin.com/company/blitzgro-india" target="_blank"
                title="LinkedIn"
                className="grid place-items-center size-10 rounded-full
             bg-[#0a66c2] text-white
             hover:scale-125 hover:bg-[#145DBF]
             transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
                     -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
                     c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"
                  />
                  <path
                    d="M5.337 7.433c-1.144 0-2.063-.926-2.063-2.065
                     0-1.138.92-2.063 2.063-2.063
                     1.14 0 2.064.925 2.064 2.063
                     0 1.139-.925 2.065-2.064 2.065zM6.964 20.452H3.71V9h3.254v11.452z"
                  />
                </svg>
              </Link>
              <Link
                to="#"
                title="Facebook"
                className="grid place-items-center size-10 rounded-full
             bg-[#0866FF] text-white
             hover:scale-125 hover:bg-[#145DBF]
             transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309
                        c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24
                        l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696
                       h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326
                        C24 .597 23.403 0 22.675 0z"
                  />
                </svg>
              </Link>

              <Link
                to="#"
                title="Twitter"
                className="grid place-items-center size-10 rounded-full
             bg-black text-white
             hover:scale-125 hover:bg-zinc-900
             transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M18.244 2H21.99l-8.19 9.372L23.5 22h-7.39l-5.79-7.59L4.38 22H.63l8.73-9.99L.5 2h7.58l5.23 6.87L18.24 2h.004z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
