// resources/js/Components/Navbar.js
import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-black text-2xl">My App</h1>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <ul
                    className={`${
                        isOpen ? "block" : "hidden"
                    } lg:flex lg:space-x-4`}
                >
                    <li>
                        <Link
                            href="/"
                            className="text-black hover:text-orange-500 block lg:inline-block"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-black hover:text-orange-500 block lg:inline-block"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-black hover:text-orange-500 block lg:inline-block"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
