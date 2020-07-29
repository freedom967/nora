import React from "react";
import { Link } from "react-router-dom";
import logo from '../../static/image/nora.png';

export const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/" replace>
                    <img src={`${logo}`} width="112" height="28" />
                </Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to='/' className="navbar-item" replace>
                        Home
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to='/addnote' className='button is-primary' replace>
                                <strong>add</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}