import { Outlet, Link } from "react-router-dom";
import style from './Layout.css'
import React from "react";



const Layout = () => {


    return (

        <>
            <div id="page_container">
                <header class="static">
                    <nav>
                        <ul class="nav_ul">
                            <li class="nav_ul_li">
                                <Link to="/">Data</Link>
                            </li>
                            <li class="nav_ul_li">
                                <Link to="/CV">CV</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Outlet />

                <footer class="static">
                    <nav>
                        <ul class="nav_ul">
                            <li class="nav_ul_li">
                                <Link to="/">Data</Link>
                            </li>
                            <li class="nav_ul_li">
                                <Link to="/CV">CV</Link>
                            </li>
                        </ul>
                    </nav>
                </footer>
            </div>
        </>

    )
};

export default Layout;