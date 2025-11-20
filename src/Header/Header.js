import { AccessTimeOutlined, CalendarMonth, Close, CloseOutlined, LocalPhoneOutlined, LoginOutlined, LogoutOutlined, MenuBook, MenuOpenOutlined, MenuOutlined, Search, ShoppingCartOutlined, TimeToLeaveOutlined, Translate, X } from "@mui/icons-material";
import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/band-logo.webp'
import { Menu } from "@mui/material";
import SideBar from "../Pages/SideBar/SideBar";
import Slider from "../Pages/Slider/Slider";
import ModalPopup from "../Pages/ModalPopup/ModalPopup";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = useCallback((e) => {
        e.preventDefault()
        setIsOpenModal(true)
    })

    const handleCloseModal = useCallback((e) => {
        setIsOpenModal(false)
    })

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const [open, setOpen] = useState(false)
    const handOpen = () => {
        setOpen(true)
    }

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if(section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    useEffect(() => {
        if((open)) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [open])

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
            <header className={ `w-full duration-300 z-50
                ${isSticky ? 'bg-white fixed left-0 top-0 shadow-md z-50' :
                    'absolute top-0 left-0'}` }>
                <article className="  container-xl mx-auto md:px-0 lg:px-0">
                    <div className="flex justify-between items-center py-0 lg:py-0 
                    sm:flex-wrap md:flex-wrap flex-wrap lg:flex-wrap px-2 sm:px-2 md:px-2 lg:px-0">
                        {/*Logo-start */ }
                        <div className="mt-2 relative flex items-center justify-center gap-5">

                            <div>
                                { isSticky ? (
                                    <>
                                        <div className="px-4 py-2">
                                            <img
                                                src={ require("../assets/images/ts-logo-new.png") }
                                                loading="lazy"
                                                className="w-[120px] rounded-b-md rounded-t-none"
                                                alt="brand"
                                            />
                                        </div>
                                    </>) : (
                                    <>
                                        <div className="px-4 py-2">
                                            <img
                                                src={ require("../assets/images/ts-logo-new.png") }
                                                loading="lazy"
                                                className="w-[120px] rounded-b-md rounded-t-none"
                                                alt="brand"
                                            />
                                        </div>
                                    </>
                                ) }
                            </div>
                            <hr className="w-[2px] h-[100px] bg-green-700" />
                            <div>
                                <img src={ require('../assets/images/tsgovt-logo.png') } alt="ts-govt-logo" className="w-[150px]"
                                    loading="lazy" srcSet={ require('../assets/images/tsgovt-logo.png') } datatype="async" />
                            </div>

                        </div>
                        {/* end-logo */ }

                        {/* end */ }

                        <div className="flex items-center gap-0 h-100 relative">
                            <div className="me-1">

                                <button onClick={ () => handleScroll('packages') }
                                    className={ ` info-ab-ex ${isSticky ?
                                        ' text-white px-5 p-3 bg-green-700 font-normal text-2xl' :
                                        'bg-green-700 px-5 p-3 text-white font-normal text-2xl'}` }>
                                    <span>
                                        <CalendarMonth /> Book a Tour
                                        {/* <LocalPhoneOutlined fontSize="medium" /> */ }
                                    </span>
                                </button>

                            </div>

                            <SideBar />
                        </div>

                    </div>
                </article>
            </header>
            <Slider />

            <div className='flex flex-col items-center justify-center'>
                { open && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
                        {/* modal content */ }
                        <div className='bg-white relative rounded-md shadow-xl w-11/12 md:w-1/3'>
                            <div className="bg-green-700 px-4 py-2">
                                <h2 className="text-5xl text-green-100 font-normal
                                 text-white info-ab-ex">
                                    Book a Tour
                                </h2>
                                <p className="text-sm text-green-50">Lorem Ipsum is simply dummy text of
                                    the printing </p>
                            </div>
                            <button
                                onClick={ () => setOpen(false) }
                                className='bg-blue-900 px-4 py-4 absolute top-0 right-0 
                                text-white hover:text-white'
                            >
                                <Close />
                            </button>
                            <div className="px-4 py-4">
                                <div className="mb-2">
                                    <label class="block text-sm text-gray-700 text-sm font-normal mb-2" for="username">
                                        Full Name
                                    </label>
                                    <input type="text" className="w-full px-2 py-2 border border-gray-300"
                                        placeholder="Your Name" />
                                </div>
                                <div className="mb-2">
                                    <label class="block text-sm text-gray-700 text-sm font-normal mb-2" for="username">
                                        Email Address
                                    </label>
                                    <input type="text" className="w-full px-2 py-2 border border-gray-300"
                                        placeholder="Your Email ID" />
                                </div>
                                <div className="mb-2">
                                    <label class="block text-sm text-gray-700 text-sm font-normal mb-2" for="username">
                                        Phone Number
                                    </label>
                                    <input type="text" className="w-full px-2 py-2 border border-gray-300"
                                        placeholder="Contact Number" />
                                </div>
                                <div className="mb-2">
                                    <label class="block text-sm text-gray-700 text-sm font-normal mb-2" for="username">
                                        City/Country
                                    </label>
                                    <input type="text" className="w-full px-2 py-2 border border-gray-300"
                                        placeholder="Where are you travelling from?" />
                                </div>
                                <div className="mb-2">
                                    <label class="block text-sm text-gray-700 text-sm font-normal mb-2" for="username">
                                        Number of Travellers
                                    </label>
                                    <input type="number"
                                        className="w-full px-2 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Where are you travelling from?" />
                                </div>
                                <div className="mb-2">
                                    <label class="block text-sm text-gray-700 text-sm font-normal mb-2" for="username">
                                        Number of Travellers
                                    </label>
                                    <textarea name="" cols="5" rows="4" className="w-full px-2 py-2 border border-gray-300
                                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Tell us what kind of experience you’re looking for…" >
                                    </textarea>

                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button onClick={ () => setOpen(false) }
                                    className="px-2 py-3 w-full uppercase bg-slate-700 text-white
                                     hover:bg-blue-900 transition duration-300 font-bold"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                ) }
            </div>

        </>
    )
}

export default Header