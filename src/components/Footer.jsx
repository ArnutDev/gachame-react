import React from "react";

function Footer() {
    return (
        <nav className="Footer">
            <div className="logo">React Router</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/update">Update</a></li>
            </ul>
        </nav>
    );
}

export default Footer;