import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Pages/Footer/Footer";

const MainPage = () => {

    return (
        <>

            <header className=" relative">
                <Header />
            </header>

            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default MainPage