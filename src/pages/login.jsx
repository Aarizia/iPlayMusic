import { useRef } from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { IoKey } from "react-icons/io5";
import { IoIosFingerPrint } from "react-icons/io";
import './login.scss';

export default function loginPage() {

    const formRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
    }

    return (
        <main className="login">
            <h1 className="login__heading">Log in</h1>
            <form className="login__form" ref={formRef} onSubmit={submitHandler}>
                <label className="login__label">
                    Username
                    <input className="login__input" type="text" placeholder="Enter your username" />
                    <PiUserCircleFill className="login__icon" />
                </label>
                <label className="login__label">
                    Password
                    <input className="login__input" type="password" placeholder="Enter your password" />
                    <IoKey className="login__icon" />
                </label>
                <button className="login__button">Log in</button>
            </form>
            <div className="login__touch">
                <div className="login__touch-icon-container">
                    <IoIosFingerPrint className="login__touch-icon" />
                </div>
                <p>One-Touch Login</p>
            </div>
        </main>
    )
}