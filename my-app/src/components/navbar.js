import React from 'react';
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="">
                    <a className="navbar-brand" href="Home">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <img src="logo512.png" className="logo" alt="" />
                <div className="ddd">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;