import React from "react";

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="#">EBuDHIJM</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" href="#">Mission</NavLink></li>
                                    <li><NavLink className="dropdown-item" href="#">Vision</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="#">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="#">Join Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="#">News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="#">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;