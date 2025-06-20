import './TrackCard.scss';
import { FaPlay } from "react-icons/fa";
import convertDuration from '../../utility/convertDuration';
import { useContext } from 'react';
import { IsPlayingContext } from '../../providers/IsPlaying';

export default function TrackCard({ data }) {

    const isPlaying = useContext(IsPlayingContext);

    return (
        <li className='track-card'>
            <button className='track-card__button' onClick={() => isPlaying.setIsPlaying(data)}>
                <div className='track-card__icon-container'>
                    <FaPlay />
                </div>
                <h4 className='track-card__title'>{data.name}</h4>
                <p  className='track-card__artist'>{data.artist}</p>
                <p  className='track-card__duration'>{convertDuration(data.duration)}</p>
            </button>
        </li>
    )
}