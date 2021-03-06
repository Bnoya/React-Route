import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { authTypes } from '../types/authTypes'

const Navbar = () => {
    const {dispatch} = useContext(AuthContext)
    
    const history = useHistory()

    const handelLogout = () => {
        dispatch({type: authTypes.logout})
        history.replace("/login");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <h2 className="navbar-brand">DB App</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink activeClassName='active text-body fw-bold'  className="nav-link" aria-current="page" to="/men">
                        Men
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName='active text-body fw-bold'  className="nav-link" aria-current="page" to="/women">
                        Women
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName='active text-body fw-bold' className="nav-link" aria-current="page" to="/Search">
                        Search
                        </NavLink>
                    </li>
                    </ul>
                    <div className='d-flex '>
                        <button className='btn btn-danger' onClick={handelLogout}>Logout</button>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar