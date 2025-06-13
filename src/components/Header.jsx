import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router";
import './Header.scss';

export default function Header({ title }) {

    const navigate = useNavigate();

    return (
        <header>
            <button className="header__button" onClick={() => navigate(-1)}><IoIosArrowBack className="header__icon" /></button>
            <h1>{title}</h1>
            <button className="header__button"><IoIosSearch className="header__icon" /></button>
        </header>
    )
}