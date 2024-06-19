import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import logo from '../../assets/logo.png'; 

const Navbar = () => {
    const navItems = [
        {
            title: 'Home',
            location: '/'
        },
        {
            title: 'About',
            location: '/about'
        },
        {
            title: 'Contact',
            location: '/contact'
        }
    ];

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems.map(nav => (
                            <li key={nav.title}>
                                <Link href={nav.location}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    src="/images/logo.png"
                    width={150}
                    height={50}
                    alt="Picture of the author"
                />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(nav => (
                        <li key={nav.title} className='text-lg'>
                            <Link href={nav.location}>{nav.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;
