import { NavLink } from 'react-router';
import './Footer.scss';
import { HiCollection } from "react-icons/hi";
import { BiSolidPlaylist } from "react-icons/bi";
import { GiTwirlCenter } from "react-icons/gi";
import { CgDarkMode } from "react-icons/cg";
import { MdCategory } from "react-icons/md";

export default function Footer() {

    return (
        <footer>
            <nav>
                <ul className='menu__list'>
                    <li className='menu__item'>
                        <NavLink to='/albums' className={({ isActive }) => isActive ? "active" : "not-active"}>
                            <HiCollection className='menu__icon' />
                        </NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink to='/playlists' className={({ isActive }) => isActive ? "active" : "not-active"}>
                            <BiSolidPlaylist className='menu__icon' />
                        </NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink to='/' className={({ isActive }) => isActive ? "active" : "not-active"}>
                            <GiTwirlCenter className='menu__icon' />
                        </NavLink>
                    </li>
                    <li className='menu__item'>
                        <button className='menu__button'>
                            <CgDarkMode className='menu__icon' />
                        </button>
                    </li>
                    <li className='menu__item'>
                        <NavLink to='/categories' className={({ isActive }) => isActive ? "active" : "not-active"}>
                            <MdCategory className='menu__icon' />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}