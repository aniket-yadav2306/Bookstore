import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="/about" className="hover:text-blue-500 transition">About us</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <Link to="/" className="hover:text-blue-500 transition">Jobs</Link>
          <Link to="/" className="hover:text-blue-500 transition">Press kit</Link>
        </nav>

        <nav>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:gap-4 md:justify-start">
            <a href="https://daisyui.com/" aria-label="Twitter" className="hover:text-blue-400 transition">
              <svg className="fill-current text-gray-600 dark:text-white w-6 h-6" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045C7.691 7.959 4.063 6 1.634 3.02c-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://react-hot-toast.com/docs/toast" aria-label="YouTube" className="hover:text-red-500 transition">
              <svg className="fill-current text-gray-600 dark:text-white w-6 h-6" viewBox="0 0 24 24">
                <path d="M19.615 3.184C16.011 2.938 7.984 2.939 4.385 3.184 0.488 3.45 0.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
              </svg>
            </a>
            <a href="https://www.react-hook-form.com/get-started" aria-label="Facebook" className="hover:text-blue-600 transition">
              <svg className="fill-current text-gray-600 dark:text-white w-6 h-6" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>
        </nav>

        <aside className="text-center mt-6 text-sm">
          <p>
            &copy; {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
