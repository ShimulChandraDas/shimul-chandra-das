import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar px-10 bg-slate-700 font-bold uppercase text-white rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content items-center mt-3 p-2 shadow bg-slate-700 rounded-box w-96">
                            <li><a>Home</a></li>
                            <li ><a> About</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Blogs</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>

                    <NavLink to='/' className="btn btn-ghost normal-case text-xl">Dev-Shimul</NavLink>
                </div>

                <div className="navbar-end">
                    <ul className="menu menu-horizontal hidden lg:flex p-0">
                        <li><a>Home</a></li>
                        <li ><a> About</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Contact</a></li>
                    </ul>

                    <a className="btn">Get started</a>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;