import React from 'react';
import logo from '../../../../public/ToyTown-Logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const navItems = <>
        <li className='text-sm'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#757575]'}>Home</NavLink>
        </li>
        <li className='text-sm'>
            <NavLink to='/alltoys' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#757575]'}>All Toys</NavLink>
        </li>
        <li className='text-sm'>
            <NavLink to='/mytoys' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#757575]'}>My Toys</NavLink>
        </li>
        <li className='text-sm'>
            <NavLink to='/addtoy' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#757575]'}>Add A Toy</NavLink>
        </li>

        <li className='text-sm'>
            <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#757575]'}>Blog</NavLink>
        </li>
    </>

    return (
        <div className=''>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}

                        </ul>
                    </div>
                    <Link to='./'>
                        <img className='h-11 md:h-20 cursor-pointer' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" space-x-6 menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-5">

                    <Link to='/login' className=" font-medium text-[white] px-8 py-3 bg-primary border border-primary hover:bg-[#ff6a3d00] hover:text-primary rounded">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;