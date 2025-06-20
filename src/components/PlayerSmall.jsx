import './PlayerSmall.scss';
import { FaPlay } from "react-icons/fa";
import convertDuration from '../utility/convertDuration';
import { useContext } from "react";
import { IsPlayingContext } from "../providers/IsPlaying";

const data = {
    currentTrack: {
        trackTitle: 'Title 1',
        albumTitle: 'Album 1',
        artist: 'Artist 1',
        albumImageUrl: '/images/2.jpg',
        duration: 450
    }
}

export default function PlayerSmall() {

    const currentTrack = useContext(IsPlayingContext);
    let currentTime = 126;

    console.log(currentTrack)

    return (
        <article className="player-small">
            <button className="player-small__button" style={{backgroundImage: `url(${currentTrack.isPlaying.albumImageUrl ? currentTrack.isPlaying.albumImageUrl : data.currentTrack.albumImageUrl})`}}>
                <div className="player-small__icon-container">
                    <FaPlay className="player-small__icon"/>
                </div>
            </button>
            <p className="player-small__text player-small__title">{currentTrack.isPlaying.name ? currentTrack.isPlaying.name : data.currentTrack.trackTitle}</p>
            <p className="player-small__text player-small__artist">{currentTrack.isPlaying.artist ? currentTrack.isPlaying.artist : data.currentTrack.artist}</p>
            <p className="player-small__text player-small__duration">{`${convertDuration(currentTime)} / ${convertDuration(currentTrack.isPlaying.duration ? currentTrack.isPlaying.duration : data.currentTrack.duration)}`} </p>
        </article>
    )
}