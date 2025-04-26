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
          <p className="text-sm">&copy; {new Date().getFullYear()} Neven Marinkovic. All rights reserved.</p>
        </div>
      </footer>
    
    );
}
