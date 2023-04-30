import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/icons/logo.png'
const Header = () => {
    return (
        <nav className='w-full fixed top-0 left-0 right-0 z-50 bg-teal-600 px-5 text-white'>
            <div className='w-full max-w-6xl mx-auto h-20 flex justify-between items-center'>
                <div>
                    <img className='w-16 h-16' src={logo} alt="" />
                </div>
                <div>
                <input className='py-2 px-5 rounded bg-slate-50 w-full' type="search" name="search" id="search" placeholder='Search your Destination...' />
                </div>
                <ul className='flex flex-col md:flex-row gap-5 items-center text-xl'>
                    <Link to='/'>Home</Link>
                    <Link to='/news'>News</Link>
                    <Link to='/destination'>Destination</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/login'><button className='p-2 px-10 text-lg font-semibold bg-amber-500 rounded-full'>Login</button></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Header;