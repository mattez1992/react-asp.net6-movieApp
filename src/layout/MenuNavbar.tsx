import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">React Movies</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/genres" className="nav-link">Genres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/actors" className="nav-link">Actors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movietheaters" className="nav-link">Theaters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies" className="nav-link">Movies</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
