import { NavLink } from 'react-router';
import './Footer.scss';
import { HiCollection } from "react-icons/hi";
import { BiSolidPlaylist } from "react-icons/bi";
import { GiTwirlCenter } from "react-icons/gi";
import { VscColorMode } from "react-icons/vsc";
import { MdCategory } from "react-icons/md";
import SvgLinearGradient from './SvgLinearGradient';
import DarkmodeCheckbox from './DarkmodeCheckBox';

export default function Footer() {

    return (
        <footer>
            <nav>
                <ul className='menu__list'>
                    <li className='menu__item'>
                        <NavLink to='/albums' className={({ isActive }) => isActive ? "active" : "not-active"}>
                            {({ isActive }) => isActive ? 
                            <HiCollection className='menu__icon' /> :
                            <SvgLinearGradient>
                                <HiCollection className='menu__icon' />
                            </SvgLinearGradient>}
                        </NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink to='/playlists' className={({ isActive }) => isActive ? "active" : "not-active"}>
                            {({ isActive }) => isActive ? 
                            <BiSolidPlaylist className='menu__icon' /> :
                            <SvgLinearGradient>
                                <BiSolidPlaylist className='menu__icon' />
                            </SvgLinearGradient>}
                        </NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink to='/' className={({ isActive }) => isActive ? "active" : "not-active"}>
                            {({ isActive }) => isActive ? 
                            <GiTwirlCenter className='menu__icon' /> :
                            <SvgLinearGradient>
                                <GiTwirlCenter className='menu__icon' />
                            </SvgLinearGradient>}
                        </NavLink>
                    </li>
                    <li className='menu__item'>
                        <DarkmodeCheckbox />
                    </li>
                    <li className='menu__item'>
                        <NavLink to='/categories' className={({ isActive }) => isActive ? "active" : "not-active"}>
                            {({ isActive }) => isActive ? 
                            <MdCategory className='menu__icon' /> :
                            <SvgLinearGradient>
                                <MdCategory className='menu__icon' />
                            </SvgLinearGradient>}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}