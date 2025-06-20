import { Link } from 'react-router';
import BackgroundImage from '../components/BackgroundImage';
import ColorBlob from '/images/Asset3.svg';
import './walkthrough.scss';
import { GiResonance } from "react-icons/gi";
import { IoIosHeart } from "react-icons/io";
import { IoMusicalNote } from "react-icons/io5";
import { useRef, useState } from 'react';

export default function walkthroughPage() {

    const [currentInputChecked, setCurrentInputChecked] = useState(1);
    const radioOneRef = useRef();
    const radioTwoRef = useRef();
    const radioThreeRef = useRef();

    function changeHandler() {

       if (radioOneRef.current.checked) {
        setCurrentInputChecked(1);
       } 
       if (radioTwoRef.current.checked) {
        setCurrentInputChecked(2);
       } 
       if (radioThreeRef.current.checked) {
        setCurrentInputChecked(3);
       }
    }

    return (
        <>  {currentInputChecked === 1 &&
            <BackgroundImage imageUrl={ColorBlob} />}
            <main className='walkthrough'>
                <h1 className='walkthrough__heading'>
                    {currentInputChecked === 1 && 'Where words fail, music speaks'}
                    {currentInputChecked === 2 && 'No music no life'}
                    {currentInputChecked === 3 && 'Peace.love music'}
                </h1>
                <p className='walkthrough__text'>Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                <nav className='walkthrough__menu'>
                    <label className='walkthrough__label'>
                        <GiResonance className='walkthrough__icon' />
                        <input defaultChecked ref={radioOneRef} onChange={changeHandler} type="radio" className='walkthrough__input' name="radio" />
                    </label>
                    <label className='walkthrough__label'>
                        <IoIosHeart className='walkthrough__icon' />
                        <input ref={radioTwoRef} onClick={changeHandler} type="radio" className='walkthrough__input' name="radio" id='inputTwo' />
                    </label>
                    <label className='walkthrough__label'>
                        <IoMusicalNote className='walkthrough__icon' />
                        <input ref={radioThreeRef} onClick={changeHandler} type="radio" className='walkthrough__input' name="radio" id='inputThree' />
                    </label>
                </nav>
                <Link to={'/'} className='walkthrough__link'>skip</Link>
            </main>
        </>
    )
}