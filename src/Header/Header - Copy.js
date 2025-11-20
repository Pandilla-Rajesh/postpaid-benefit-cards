import { AccessTimeOutlined, CloseOutlined, LocalPhoneOutlined, LoginOutlined, LogoutOutlined, MenuBook, MenuOpenOutlined, MenuOutlined, Search, ShoppingCartOutlined, TimeToLeaveOutlined, Translate, X } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/band-logo.webp'
import { Menu } from "@mui/material";
import SideBar from "../Pages/SideBar/SideBar";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            const topHeaderHeight = document.getElementById("topHeader")?.offsetHeight || 0;
            if(window.scrollY > topHeaderHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [

        { name: 'Mobile Plans', path: "/", },
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
            {/* <section className="top-0 left-0 w-full text-white top-header" id="topHeader">
                <article className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <NavLink to="/" className={ ({ isActive }) => `text-slate-50 font-semibold 
                         text-sm hover:bg-blue-800 transition ease-in-out py-2 px-3
                        ${isActive ? 'bg-blue-900' : ''}` }>
                                <span className="flex items-center gap-1">
                                    <span><LocalPhoneOutlined /></span>
                                    <span className=" font-semibold">180042546464</span>
                                </span>
                            </NavLink>
                            <NavLink to="/"
                                className={ ({ isActive }) => `text-slate-50 font-normal
                        text-sm hover:bg-blue-800 transition ease-in-out py-2 px-3
                        ${isActive ? '' : ''}` }>
                                <span className="flex items-center gap-1">
                                    <AccessTimeOutlined />
                                    <span className=" font-semibold">8:00 AM - 8:00 PM</span>
                                </span>
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
            </section> */}
            <header className={ `w-full bg-transparent duration-300
                ${isSticky ? 'bg-blue-950 fixed left-0 top-0 z-50 shadow-md' : ' relative shadow'}` }>
                <article className=" container mx-auto sm:px-4 md:px-0 lg:px-0">
                    <div className="flex justify-between items-center py-0 lg:py-0 
                    sm:flex-wrap md:flex-wrap flex-wrap lg:flex-wrap px-2 sm:px-2 md:px-2 lg:px-0">
                        {/*Logo-start */ }
                        <div className=" flex items-center flex-grow gap-6">
                            <div className="space-x-2">
                                <img src={ require("../assets/images/ts-logo.webp") } loading="lazy" className="w-[130px] h-[80px]" alt="brand" />
                            </div>
                            {/* Desktop-menu */ }
                            <ul className="md:hidden hidden lg:flex flex items-center gap-0">
                                <li>
                                    <NavLink to="/plancards"
                                        className={ ({ isActive }) => `text-sm font-normal 
                                        py-3 px-3 transition-all duration-300 
                                        ${isActive ?
                                                ' bg-green-700 text-white hover:bg-blue-800'
                                                : 'text-slate-800 hover:bg-cyan-800 hover:text-slate-50'}` }>
                                        Telangana
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/apipages"
                                        className={ ({ isActive }) => `text-sm font-normal transition-all duration-300 px-3 py-3
                                        ${isActive ? 'bg-green-700 text-white hover:bg-blue-700'
                                                : 'text-slate-800 hover:bg-blue-700 hover:text-slate-50'}` }>
                                        Destinations
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/forms"
                                        className={ ({ isActive }) => `text-sm font-normal py-3 px-3 transition-all 
                                    duration-300 rounded
                                        ${isActive ? 'bg-cyan-400 text-white hover:bg-cyan-700'
                                                : 'text-slate-800 hover:bg-cyan-700 hover:text-slate-50'}` }>
                                        Custom Tours
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className={ ({ isActive }) => `text-slate-800 text-sm font-normal 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}` }>
                                        Hotels
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink className={ ({ isActive }) => `text-slate-800 text-sm font-normal 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}` }>
                                        Redux Toolkit
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={ ({ isActive }) => `text-slate-800 text-sm font-normal 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}` }>
                                        Life Cycle Methods
                                    </NavLink>
                                </li> */}
                            </ul>
                            {/* menu-end */ }
                        </div>
                        {/* end-logo */ }
                        {/* Right-side-menu */ }
                        <div className="hidden md:hidden lg:flex items-center gap-0">
                            <ul className="flex items-center gap-4 text-sm">
                                <li>
                                    <NavLink to="/props" className={ ({ isActive }) => `text-slate-700 text-sm 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}` }>
                                        Packages
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={ ({ isActive }) => `text-slate-700 text-sm 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}` }>
                                        Eco Tourism
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={ ({ isActive }) => `text-slate-700 text-sm 
                                        ${isActive ? 'hover:bg-cyan-800 py-3 px-3 hover:text-slate-50' : ''}` }>
                                        Department
                                    </NavLink>
                                </li>
                            </ul>

                            <div className="flex lg:gap-6 items-center">
                                {/* cart-icon */ }
                                {/* <div className=" relative">
                                    <ShoppingCartOutlined className="w-5 h-5 text-gray-600" />
                                    <span className=" absolute -top-2 -right-2 text-sm bg-pink-600 text-white
                                      rounded-full px-1.5">0</span>
                                </div> */}
                                {/* end */ }

                                {/* Login-btn */ }
                                <div className="p-[2px] rounded bg-gradient-to-r via-purple-500
                                   from-pink-500 to-pink-800  transition-all
                                    ease-in-out">
                                    <button className="bg-white hover:bg-cyan-600
                                     hover:text-slate-50 rounded px-6 py-2 duration-700">
                                        <span className="text-sm font-medium">Login</span>
                                    </button>
                                </div>
                                {/* Login-btn-end */ }
                            </div>
                        </div>
                        {/* right-menu-end */ }

                        {/* mobile-menu */ }
                        { isOpen && (
                            <div className="w-full bg-gradient-to-t
                                     to-purple-100 via-purple-900 from-purple-100 px-3 
                                     my-2 relative z-50 rounded-sm">
                                <ul className="absolute left-0 px-2 right-0 top-full
                                          bg-gradient-to-t from-purple-950 via-sky-800 
                                          to-cyan-600 z-50 rounded-md mb-5">
                                    { navItems?.map((item, index) => (
                                        <li key={ index }>
                                            <NavLink className={ ({ isActive }) => `block px-2 py-1 rounded transition leading-relaxed my-2 text-slate-50
                                            ${isActive ? 'bg-white/5 font-normal hover:bg-white hover:text-cyan-800' : 'hover:bg-white hover:text-purple-600'}` }>
                                                { item.name }
                                            </NavLink>
                                        </li>
                                    )) }
                                </ul>
                            </div>
                        ) }
                        <SideBar />
                        {/* end */ }
                    </div>
                </article>
            </header>
        </>
    )
}

export default Header