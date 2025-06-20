import { useEffect, useRef, useState } from 'react';
import './PlaylistsMain.scss';
import ImageSlider from './ImageSlider';
import TrackCard from './cards/TrackCard';
import PlayerSmall from './PlayerSmall';

const data = {
    playlists: [
        {
            id: 'playlists1',
            name: 'Playlist 1',
            imageUrl: '/images/1.jpg'
        },
        {
            id: 'playlists2',
            name: 'Playlist 2',
            imageUrl: '/images/2.jpg'
        },
        {
            id: 'playlists3',
            name: 'Playlist 3',
            imageUrl: '/images/3.jpg'
        },
        {
            id: 'playlists4',
            name: 'Playlist 4',
            imageUrl: '/images/4.jpg'
        },
        {
            id: 'playlists5',
            name: 'Playlist 5',
            imageUrl: '/images/5.jpg'
        }
    ],
    playlist: [
        {
            id: 'playlist1',
            name: 'Playlist 1',
            tracks: [
                {
                    id: 'playlist 1 track 1',
                    name: 'P1 Track 1',
                    artist: 'Artist 1',
                    duration: 9
                },
                {
                    id: 'playlist 1 track 2',
                    name: 'P1 Track 2',
                    artist: 'Artist 2',
                    duration: 57
                },
                {
                    id: 'playlist 1 track 3',
                    name: 'P1 Track 3',
                    artist: 'Artist 3',
                    duration: 290
                },
                {
                    id: 'playlist 1 track 4',
                    name: 'P1 Track 4',
                    artist: 'Artist 4',
                    duration: 247
                },
                {
                    id: 'playlist 1 track 5',
                    name: 'P1 Track 5',
                    artist: 'Artist 5',
                    duration: 1010
                },
                {
                    id: 'playlist 1 track 6',
                    name: 'P1 Track 6',
                    artist: 'Artist 6',
                    duration: 3686
                },
                {
                    id: 'playlist 1 track 7',
                    name: 'P1 Track 7',
                    artist: 'Artist 7',
                    duration: 5706
                },
                {
                    id: 'playlist 1 track 8',
                    name: 'P1 Track 8',
                    artist: 'Artist 8',
                    duration: 959774
                }
            ]
        },
        {
            id: 'playlist2',
            name: 'Playlist 2',
            tracks: [
                {
                    id: 'playlist 2 track 1',
                    name: 'P2 Track 1',
                    artist: 'Artist 1',
                    duration: 210
                },
                {
                    id: 'playlist 2 track 2',
                    name: 'P2 Track 2',
                    artist: 'Artist 1',
                    duration: 240
                },
                {
                    id: 'playlist 2 track 3',
                    name: 'P2 Track 3',
                    artist: 'Artist 1',
                    duration: 270
                }
            ]
        },
        {
            id: 'playlist3',
            name: 'Playlist 3',
            tracks: [
                {
                    id: 'playlist 3 track 1',
                    name: 'P3 Track 1',
                    artist: 'Artist 1',
                    duration: 300
                },
                {
                    id: 'playlist 3 track 2',
                    name: 'P3 Track 2',
                    artist: 'Artist 2',
                    duration: 330
                },
                {
                    id: 'playlist 3 track 3',
                    name: 'P3 Track 3',
                    artist: 'Artist 3',
                    duration: 360
                }
            ]
        },
        {
            id: 'playlist4',
            name: 'Playlist 4',
            tracks: [
                {
                    id: 'playlist 4 track 1',
                    name: 'P4 Track 1',
                    artist: 'Artist 1',
                    duration: 390
                },
                {
                    id: 'playlist 4 track 2',
                    name: 'P4 Track 2',
                    artist: 'Artist 2',
                    duration: 420
                },
                {
                    id: 'playlist 4 track 3',
                    name: 'P4 Track 3',
                    artist: 'Artist 3',
                    duration: 450
                }
            ]
        },
        {
            id: 'playlist5',
            name: 'Playlist 5',
            tracks: [
                {
                    id: 'playlist 5 track 1',
                    name: 'P5 Track 1',
                    artist: 'Artist 1',
                    duration: 480
                },
                {
                    id: 'playlist 5 track 2',
                    name: 'P5 Track 2',
                    artist: 'Artist 2',
                    duration: 510
                },
                {
                    id: 'playlist 5 track 3',
                    name: 'P5 Track 3',
                    artist: 'Artist 3',
                    duration: 540
                }
            ]
        },
    ]
}

export default function PlaylistsMain( props ) {

    const [playlistsData, setPlaylistsData] = useState(data.playlists);
    const [playlistData, setPlaylistData] = useState(data.playlist);
    const [currentSlide, setCurrentSlide] = useState(null);

    // hvordan? genindlæse den playlist liste y-scroll til 0?
    // hvis det ikke løser sig med rigtig data så brug scrollto eller scrollby

    return (
        <main className="playlists">
            <h2 className={`playlists__heading ${(props.backgroundImage ? 'light-text' : '')}`}>Playlists</h2>
            <div className='playlists__gallery'>
                <ImageSlider data={playlistsData} setCurrentSlide={setCurrentSlide} />
            </div>
            <section className='playlist'>
                    <h3 className='playlist__title'>{playlistData[currentSlide]?.name}</h3>
                    <ul className='playlist__list'>
                        {playlistData[currentSlide]?.tracks.map(track => <TrackCard key={track.id} data={track} />)}
                    </ul>
                <button className='playlist__button'>Play all</button>
            </section>
            <PlayerSmall />
        </main>
    )
}