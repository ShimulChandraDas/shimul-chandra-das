import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div class="navbar px-10 bg-slate-700 font-bold uppercase text-white rounded-lg">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content items-center mt-3 p-2 shadow bg-slate-700 rounded-box w-96">
                            <li><a>Home</a></li>
                            <li ><a> About</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Blogs</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>

                    <NavLink to='/' class="btn btn-ghost normal-case text-xl">Dev-Shimul</NavLink>
                </div>

                <div class="navbar-end">
                    <ul class="menu menu-horizontal hidden lg:flex p-0">
                        <li><a>Home</a></li>
                        <li ><a> About</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Contact</a></li>
                    </ul>

                    <a class="btn">Get started</a>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;