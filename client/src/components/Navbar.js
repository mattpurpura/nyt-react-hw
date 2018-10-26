import React from 'react';
import {Link} from "react-router-dom";


const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Something about Navs</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">   
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item active">   
                    <Link to="/saved">Saved Articles</Link>
                </li>
            </ul>
        </div>
    </nav>
)   

export default Navbar;