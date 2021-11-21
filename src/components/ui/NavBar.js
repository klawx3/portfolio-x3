import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <a class="navbar-brand" href="#">Personal Website</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ">
                <ul className="navbar-nav mr-auto ml-3">
                    <li className="nav-item pr-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item pr-3">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
