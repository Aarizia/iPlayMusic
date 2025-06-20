import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router";
import { IoChevronDown } from "react-icons/io5";
import './Header.scss';
import { useState } from "react";

export default function Header({ title, backgroundImage, isPlayer = false }) {

    const [searchActive, setSearchActive] = useState(false);
    const navigate = useNavigate();

    return (
        <header className={backgroundImage ? 'light-text' : ''}>
            {isPlayer ? 
                <button className="header__button">
                    <IoChevronDown className="header__icon" onClick={() => navigate(-1)} />
                </button>
            :
                <button className="header__button" onClick={() => navigate(-1)}>
                    <IoIosArrowBack className="header__icon" />
                </button>
            }
            <h1>{title}</h1>
            {isPlayer ?
                <></>
            :
                <button className="header__button" onClick={() => setSearchActive(true)}><IoIosSearch className="header__icon" /></button>
            }
        </header>
    )
}