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
          <div className="flex flex-col items-center justify-center">
              <p className="text-sm">&copy; {new Date().getFullYear()} Neven Marinkovic. All rights reserved.</p>
              <a
              href="https://www.linkedin.com/in/neven-marinkovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
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
          </div>
        </div>
      </footer>
    
    );
}
