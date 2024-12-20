// resources/js/Components/Navbar.js
import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl">My App</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            href="/"
                            className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-white hover:text-gray-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-white hover:text-gray-300"
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
