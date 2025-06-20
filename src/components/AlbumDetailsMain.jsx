import { Link } from 'react-router';
import './AlbumDetailsMain.scss';
import TrackCard from './cards/TrackCard';

export default function AlbumDetailsMain( props ) {

    const data = props.data;
    console.log(data);

    return (
        <main className='album'>
            <div className={`album__details ${(props.backgroundImage ? 'light-text' : '')}`}>
                <div className='album__text'>
                    <h2 className={`${(props.backgroundImage ? 'light-text' : '')}`}>{data.title}</h2>
                    <p className='album__number-of-tracks'>{data.numberOfTracks} tracks</p>
                </div>
                <div className='genres'>
                    <p className='genres__text'>Genres hashtags</p>
                    <ul className='genres__list'>
                        {data.genres.map(genre => {
                            return (
                                <li key={genre}>
                                    <Link to={'#'} className='genres__link'>#{genre}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <section className='album__tracks'>
                <h3 className='album__tracks-heading'>All tracks</h3>
                <ul className='album__tracks-list'>
                    {data.tracks.map(track => <TrackCard key={track.id} data={track} />)}
                </ul>
            </section>
        </main>
    )
}