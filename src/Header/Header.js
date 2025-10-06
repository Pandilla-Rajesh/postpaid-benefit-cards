import { MenuBook, MenuOpenOutlined, MenuOutlined, Search, ShoppingCartOutlined, Translate, X } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/band-logo.webp'
import { Menu } from "@mui/material";

const Header=()=>{

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    const navItems = [

        {name:'Mobile Plans', path:"/"},
        {name:'Internet & TV', path:"/"},
        {name:'Smart Home', path:"/"},
        {name:'Why du', path:"/"},
        {name:'Help', path:"/"},
        {name:'Quick Pay', path:"/"},
        {name:'Recharge', path:"/"},
        {name:'Renew ID', path:"/"},
    ]

    return(
        <>
            <section className="top-0 left-0 w-full text-white top-header">
                <article className="container mx-auto">
                    <div className="flex items-center justify-between">
                       <div className="flex">
                           <NavLink to="/" className={({isActive})=> `text-slate-50 font-semibold 
                         text-sm hover:bg-blue-800 transition ease-in-out py-2 px-3
                        ${isActive ? 'bg-blue-900' : ''}`}>
                            Consumer
                        </NavLink>
                         <NavLink to="/" className={({isActive})=> `text-slate-50 font-normal
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
                                            <Translate/>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                       </div>
                    </div>
                </article>
            </section>

            <header className="w-full shadow-sm bg-white">
                <article className=" container mx-auto sm:px-4 lg:px-0">
                    <div className="flex justify-between items-center py-3 
                    sm:flex-wrap md:flex-wrap flex-wrap lg:flex-wrap px-4 sm:px-4 lg:px-0">
                        {/*Logo-start */}
                          <div className=" flex items-center gap-6">
                             <div className="space-x-2">
                                <img src={Logo} loading="lazy" className="w-10 h-10" alt="brand" />
                             </div>
                             {/* Desktop-menu */}
                                  <ul className="lg:visible xl:visible xxl:visible hidden md:flex flex items-center gap-6">
                                    <li className="">
                                        <NavLink to="/" className={({isActive})=>`text-sm font-normal 
                                        ${isActive ? 'hover:bg-cyan-800 bg-cyan-500 text-slate-50 hover:text-slate-50 transition-all ease-in-out py-3 px-3' : ''}`}>
                                            Devices
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink className={({isActive})=>`text-slate-800 text-sm font-normal ${isActive ? '' : ''}`}>
                                             Mobile Plans
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink className={({isActive})=>`text-slate-800 text-sm font-normal ${isActive ? '' : ''}`}>
                                            Internet & TV
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink className={({isActive})=>`text-slate-800 text-sm font-normal ${isActive ? '' : ''}`}>
                                            Smart Home
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink className={({isActive})=>`text-slate-800 text-sm font-normal ${isActive ? '' : ''}`}>
                                            Why du
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink className={({isActive})=>`text-slate-800 text-sm font-normal ${isActive ? '' : ''}`}>
                                            Help
                                        </NavLink>
                                    </li>
                                  </ul>
                                {/* menu-end */}
                          </div>
                        {/* end-logo */}

                        {/* Right-side-menu */}
                            <div className="hidden md:flex items-center gap-6">
                                <ul className="flex items-center gap-4 text-sm">
                                    <li>
                                        <NavLink className={({isActive})=> `text-slate-700 text-sm ${isActive ? '' : ''}`}>
                                            Quick Pay
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({isActive})=> `text-slate-700 text-sm ${isActive ? '' : ''}`}>
                                            Recharge
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({isActive})=> `text-slate-700 text-sm ${isActive ? '' : ''}`}>
                                            Renew ID
                                        </NavLink>
                                    </li>
                                </ul>

                                {/* cart-icon */}
                                  <div className=" relative">
                                     <ShoppingCartOutlined className="w-5 h-5 text-gray-600" />
                                     <span className=" absolute -top-2 -right-2 text-sm bg-pink-600 text-white
                                      rounded-full px-1.5">0</span>
                                  </div>
                                {/* end */}

                                {/* Login-btn */}
                                  <div className="p-[2px] rounded bg-gradient-to-r via-purple-500 from-pink-500 to-pink-800">
                                     <button className="bg-white rounded px-6 py-2">
                                        <span className="text-sm">Login</span>
                                     </button>
                                  </div>
                                {/* Login-btn-end */}
                            </div>
                        {/* right-menu-end */}
                         
                         <div className=" relative">
                                  <button onClick={toggleMenu}
                                    className="text-gray-700 lg:hidden focus:outline-none absolute -top-4 right-0">
                                        {isOpen ? <X fontSize="medium" /> : <MenuOutlined fontSize="medium" /> }
                                    </button>
                                </div>

                                {isOpen && (
                                    <div className="w-full bg-gradient-to-t to-purple-700 via-purple-900 from-purple-100 py-2 px-3 my-2">
                                        <ul className="shadow-sm  pt-3 pb-5">
                                       {navItems?.map((item, index)=>(
                                        <li key={index}>
                                            <NavLink className={({isActive})=>`block px-2 py-1 rounded transition leading-relaxed my-2 text-slate-50
                                            ${isActive ? 'bg-white/5 font-normal hover:bg-white hover:text-purple-600' : 'hover:bg-white hover:text-purple-600'}`}>
                                                {item.name}
                                            </NavLink>
                                        </li>
                                       ))}
                                    </ul>
                                    </div>
                                )}
                    </div>
                </article>
            </header>

        </>
    )
}

export default Header