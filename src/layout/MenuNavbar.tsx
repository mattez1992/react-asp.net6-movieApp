import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthenticationContext from '../auth/AuthenticationContext'
import Authorized from '../auth/Authorized'
import { logOut } from '../auth/handle.JWT'
import Button from '../utils/Button'

export default function MenuNavbar() {
    const { update, claims } = useContext(AuthenticationContext);

    function getUserEmail(): string {
        return claims.filter(x => x.name === "email")[0]?.value;
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">React Movies</NavLink>
                <div className="collapse navbar-collapse d-flex justify-content-between">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies/filter">
                                Browse Movies
                            </NavLink>
                        </li>

                        <Authorized role='admin' authorized={<>
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
                            <li className="nav-item">
                                <NavLink to="/users" className="nav-link">Users</NavLink>
                            </li>
                        </>} />
                    </ul>
                    <div className="d-flex">
                        <Authorized
                            authorized={<>
                                <span className="nav-link">Hello, {getUserEmail()}</span>
                                <Button onClick={() => { logOut(); update([]) }} className='nav-link btn btn-link'>
                                    Log Out
                                </Button>
                            </>}
                            notAuthorized={
                                <>
                                    <Link className="nav-link btn btn-link" to="/register">
                                        Register
                                    </Link>

                                    <NavLink className="nav-link btn btn-link" to="/login">
                                        Login
                                    </NavLink>
                                </>
                            } />
                    </div>
                </div>
            </div>
        </nav>
    )
}
