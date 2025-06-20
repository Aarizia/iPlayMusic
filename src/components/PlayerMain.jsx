import convertDuration from '../utility/convertDuration';
import './PlayerMain.scss';
import { FaFastBackward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import SvgLinearGradient from './SvgLinearGradient';
import ArtistPlaceholderImage from '/images/artist-placeholder-image.svg';

export default function PlayerMain( props ) {

    const data = props.data;
    console.log(props.backgroundImage);

    return (
        <main className={`playing ${(props.backgroundImage ? 'light-text' : '')}`}>
            {data.artistImageUrl ?
            <div className='playing__image-container'>
                <div className='playing__overlay-canvas'>
                    <div className='playing__overlay-canvas--medium'>
                        <div className='playing__overlay-canvas--small'>
                        </div>
                    </div>
                </div>
                <img className='playing__image' src={data.artistImageUrl} alt="" />                  
            </div>
            :
                <img src={ArtistPlaceholderImage} className='playing__placeholder-image' alt="placeholder-image" />
            }
            <section className='player'>
                <h2 className={`font-size-small ${(props.backgroundImage ? 'light-text' : 'non-gradient')}`}>{data.trackTitle}</h2>
                <p className='player__artist'>{data.artist}</p>
                <div className='player__line'></div>
                <div className='player__duration'>
                    <p className='player__currentTime'>0:00</p>
                    <p className='player__maxTime'>{convertDuration(data.duration)}</p>
                </div>
                <nav className='player__menu'>
                    {props.backgroundImage ? 
                        <button className='player__button'><FaFastBackward /></button>
                    :
                        <button className='player__button'>
                            <SvgLinearGradient width='24px' height='22px'>
                                <FaFastBackward />
                            </SvgLinearGradient>
                        </button>
                    }
                    <button className='player__button'><FaBackward /></button>
                    {props.backgroundImage ?
                        <button className='player__button player__button--big'>
                            <div className='player__button-icon-container'>
                                <FaPlay className='player__button-icon'/>
                            </div>
                        </button>
                    :
                        <button className='player__button player__button--big-gradient-fill'>
                            <SvgLinearGradient>
                                <FaPlay />
                            </SvgLinearGradient>
                        </button>
                    }
                    <button className='player__button'><FaForward /></button>
                    {props.backgroundImage ? 
                        <button className='player__button'><FaFastBackward /></button>
                    :
                        <button className='player__button'>
                            <SvgLinearGradient width='24px' height='22px'>
                                <FaFastForward />
                            </SvgLinearGradient>
                        </button>
                    }
                </nav>
            </section>
        </main>
    )
}