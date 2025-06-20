import LogoLight from '/images/music-logo-solid.png';
import LogoDark from '/images/music-logo.png';
import './welcome.scss';
import { useContext } from 'react';
import { ThemeContext } from '../providers/Theme';

export default function welcomePage() {

    const theme = useContext(ThemeContext);

    console.log(theme)

    return (
        <main className='welcome'>
            {theme.currentTheme === 'light' ?
                <img className='welcome__image' src={LogoLight} alt="logo" />
            :
                <img className='welcome__image' src={LogoDark} alt="logo" />
            }
            <h1 className='welcome__heading'>iPlayMusic</h1>
        </main>
    )
}