// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return (
            <div className='sticky-top'>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News_Dump</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/business">business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/entertainment">entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/health">health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/science">science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/sport">sport</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/technology">technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>

                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li> */}
                            </ul>
                            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

