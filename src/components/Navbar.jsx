import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">GachaMe</Link>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar1">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbar1" class="collapse navbar-collapse">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-2">
                            <li><Link to="/" className="nav-link text-light">Home</Link></li>
                        </li>
                        <li class="nav-item mx-2">
                            <li><Link to="/about" className="nav-link text-light">About</Link></li>
                        </li>
                        <li class="nav-item mx-2">
                            <li><Link to="/update" className="nav-link text-light">Update</Link></li>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;