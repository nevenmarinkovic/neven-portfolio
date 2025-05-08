import Link from "next/link";
export default function Footer() {
    return (
      <footer className="w-full bg-white dark:bg-gray-800 text-white py-4">
      <div className="flex flex-col items-center justify-center">
        <nav className="flex space-x-4 mb-2">
        <Link href="/">Home </Link>
        <Link href="/about">About</Link>
        <Link href="/experiences">Experiences</Link>
        </nav>
        <div className="flex flex-col items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Neven Marinkovic</p>
          <div className="flex space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/neven-marinkovic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.379-.028-3.156-1.922-3.156-1.922 0-2.218 1.5-2.218 3.047v5.609h-3v-10h2.891v1.359h.041c.403-.765 1.388-1.562 2.859-1.562 3.057 0 3.625 2.012 3.625 4.627v5.576z" />
            </svg>
          </a>
          <a
            href="https://github.com/nevenmarinkovic?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.623-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://observablehq.com/d/a1194b6a7b7041b0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Observable Profile"
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" fill="white" />
            <circle cx="12" cy="12" r="3" />
            </svg>
          </a>
          </div>
        </div>
      </div>
      </footer>
    );
}
