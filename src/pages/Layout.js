import { Outlet, Link } from "react-router-dom";
import style from '../css/style.module.css'

const Layout = () => {
    return (

        <>
            <header>
                <nav>
                    <ul id={style.nav_ul}>
                        <li className={style.nav_ul_li}>
                            <Link to="/">Data</Link>
                        </li>
                        <li className={style.nav_ul_li}>
                            <Link to="/CV">CV</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Outlet />


            <footer>
            <nav>
                    <ul id={style.nav_ul}>
                        <li className={style.nav_ul_li}>
                            <Link to="/">Data</Link>
                        </li>
                        <li className={style.nav_ul_li}>
                            <Link to="/CV">CV</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>

    )
};

export default Layout;