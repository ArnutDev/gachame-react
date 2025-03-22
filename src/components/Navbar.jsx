import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-900 p-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Link to="/">GachaMe</Link>
                <ul className="flex space-x-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/update">Update</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;