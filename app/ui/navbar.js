'use client'
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">My Blog</Link>
        <div className="flex space-x-4">
          <Link href="/" className={clsx("text-white hover:text-gray-300",pathname=="/"?"border-0 border-b-4 p-[2px]":"")}>Home
          </Link>
          <Link href="/about" className={clsx("text-white hover:text-gray-300",pathname=="/about"?"border-0 border-b-4 p-[2px]":"")}>About
          </Link>
          <Link href="/contact"
            className={clsx("text-white hover:text-gray-300",pathname=="/contact"?"border-0 border-b-4 p-[2px]":"")}>Contact
          </Link>
          <Link href="/user/signup"
            className={clsx("text-white hover:text-gray-300",pathname=="/user/signup"?"border-0 border-b-4 p-[2px]":"")}>Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
