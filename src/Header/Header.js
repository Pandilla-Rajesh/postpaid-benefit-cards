import { CloseOutlined, LoginOutlined, LogoutOutlined, MenuBook, MenuOpenOutlined, MenuOutlined, Search, ShoppingCartOutlined, Translate, X } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/band-logo.webp'
import { Menu } from "@mui/material";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  useEffect(() => {
    const handleScroll = () => {
      const topHeaderHeight = document.getElementById("topHeader")?.offsetHeight || 0;
      if (window.scrollY > topHeaderHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const navItems = [

        { name: 'Mobile Plans', path: "/" },
        { name: 'Internet & TV', path: "/" },
        { name: 'Smart Home', path: "/" },
        { name: 'Why du', path: "/" },
        { name: 'Help', path: "/" },
        { name: 'Quick Pay', path: "/" },
        { name: 'Recharge', path: "/" },
        { name: 'Renew ID', path: "/" },
    ]

    return (
        <>
            <section className="top-0 left-0 w-full text-white top-header" id="topHeader">
                <article className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <NavLink to="/" className={({ isActive }) => `text-slate-50 font-semibold 
                         text-sm hover:bg-blue-800 transition ease-in-out py-2 px-3
                        ${isActive ? 'bg-blue-900' : ''}`}>
                                Consumer
                            </NavLink>
                            <NavLink to="/" className={({ isActive }) => `text-slate-50 font-normal
                        text-sm hover:bg-blue-800 transition ease-in-out py-2 px-3
                        ${isActive ? '' : ''}`}>
                                Business
                            </NavLink>
                        </div>
                        <div>
                            <ul className="flex items-start gap-3">
                                <li>
                                    <Link to="/" className="p-2 transition duration-200 hover:bg-white/10">
                                        <Search className="text-sm text-slate-50" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="p-2 transition duration-200 hover:bg-white/10">
                                        <span className="text-xl uppercase text-slate-50">
                                            <small className="text-sm">a</small>a</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="p-2 transition duration-200 hover:bg-white/10">
                                        <span className="text-sm text-slate-50">
                                            <Translate />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
            <header className={`w-full bg-white duration-300
                ${isSticky ? ' fixed left-0 top-0 z-50 shadow-md' : ' relative shadow'}`}>
                <article className=" container mx-auto sm:px-4 md:px-0 lg:px-0">
                    <div className="flex justify-between items-center py-2 lg:py-4 
                    sm:flex-wrap md:flex-wrap flex-wrap lg:flex-wrap px-2 sm:px-2 md:px-2 lg:px-0">
                        {/*Logo-start */}
                        <div className=" flex items-center flex-grow gap-6">
                            <div className="space-x-2">
                                <img src={Logo} loading="lazy" className="w-10 h-10" alt="brand" />
                            </div>
                            {/* Desktop-menu */}
                            <ul className="md:hidden hidden lg:flex flex items-center gap-0">
                                <li>
                                    <NavLink to="/plancards" 
                                    className={({ isActive }) => `text-sm font-normal rounded py-3 px-3 transition-all duration-300 
                                        ${isActive ? 
                                            'bg-cyan-400 text-white hover:bg-cyan-700'
                                            : 'text-slate-800 hover:bg-cyan-800 hover:text-slate-50'}`}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/apipages" 
                                    className={({ isActive }) => `text-sm font-normal rounded transition-all duration-300 px-3 py-3
                                        ${isActive ? 'bg-cyan-400 text-white hover:bg-cyan-700' 
                                        : 'text-slate-800 hover:bg-cyan-800 hover:text-slate-50'}`}>
                                        API's
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/forms" 
                                    className={({ isActive }) => `text-sm font-normal py-3 px-3 transition-all 
                                    duration-300 rounded
                                        ${isActive ? 'bg-cyan-400 text-white hover:bg-cyan-700' 
                                        : 'text-slate-800 hover:bg-cyan-700 hover:text-slate-50'}`}>
                                        Forms
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => `text-slate-800 text-sm font-normal 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}`}>
                                        Redux
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => `text-slate-800 text-sm font-normal 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}`}>
                                       Redux Toolkit
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => `text-slate-800 text-sm font-normal 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}`}>
                                        Life Cycle Methods
                                    </NavLink>
                                </li>
                            </ul>
                            {/* menu-end */}
                        </div>
                        {/* end-logo */}
                        {/* Right-side-menu */}
                        <div className="hidden md:hidden lg:flex items-center gap-0">
                            <ul className="flex items-center gap-4 text-sm">
                                <li>
                                    <NavLink className={({ isActive }) => `text-slate-700 text-sm 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}`}>
                                        Quick Pay
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => `text-slate-700 text-sm 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}`}>
                                        Recharge
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => `text-slate-700 text-sm 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}`}>
                                        Renew ID
                                    </NavLink>
                                </li>
                            </ul>

                            <div className="flex lg:gap-6 items-center">
                                {/* cart-icon */}
                                <div className=" relative">
                                    <ShoppingCartOutlined className="w-5 h-5 text-gray-600" />
                                    <span className=" absolute -top-2 -right-2 text-sm bg-pink-600 text-white
                                      rounded-full px-1.5">0</span>
                                </div>
                                {/* end */}

                                {/* Login-btn */}
                                <div className="p-[2px] rounded bg-gradient-to-r via-purple-500
                                   from-pink-500 to-pink-800  transition-all
                                    ease-in-out">
                                    <button className="bg-white hover:bg-cyan-600
                                     hover:text-slate-50 rounded px-6 py-2 duration-700">
                                        <span className="text-sm font-medium">Login</span>
                                    </button>
                                </div>
                                {/* Login-btn-end */}
                            </div>
                        </div>
                        {/* right-menu-end */}
                        <div className="flex items-center gap-4">

                            {/* Mobile-cart */}
                            <Link to="/" className="text-gray-700 relative lg:hidden xl:hidden md:visible">
                                <ShoppingCartOutlined />
                                <span className=" absolute -top-2 -right-2 text-sm 
                                    bg-pink-500 px-1.5 rounded-full text-slate-50">0</span>
                            </Link>
                            {/* end */}

                            {/* Mobile-only-login-icon */}
                            <Link to="/" className="lg:hidden xl:hidden md:visible" aria-label="Login">
                                <LoginOutlined fontSize="medium" />
                            </Link>
                            {/* end */}
                            {/* Monile-only-menu toggle */}
                            <button onClick={toggleMenu} type="button"
                                aria-expanded={isOpen} aria-label={isOpen ? 'Close menu' : 'Open menu'}
                                className=" text-gray-700 focus:outline-none md:visible
                             lg:hidden xl:hidden transition-all ease-in-out">
                                {isOpen ? (
                                    <CloseOutlined fontSize="medium" />
                                ) : (
                                    <MenuOutlined fontSize="medium" />
                                )}
                            </button>
                            {/* end */}
                        </div>
                        {/* mobile-menu */}
                        {isOpen && (
                            <div className="w-full bg-gradient-to-t
                                     to-purple-100 via-purple-900 from-purple-100 px-3 
                                     my-2 relative z-50 rounded-sm">
                                <ul className="absolute left-0 px-2 right-0 top-full
                                          bg-gradient-to-t from-purple-950 via-sky-800 
                                          to-cyan-600 z-50 rounded-md mb-5">
                                    {navItems?.map((item, index) => (
                                        <li key={index}>
                                            <NavLink className={({ isActive }) => `block px-2 py-1 rounded transition leading-relaxed my-2 text-slate-50
                                            ${isActive ? 'bg-white/5 font-normal hover:bg-white hover:text-cyan-800' : 'hover:bg-white hover:text-purple-600'}`}>
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {/* end */}
                    </div>
                </article>
            </header>
        </>
    )
}

export default Header