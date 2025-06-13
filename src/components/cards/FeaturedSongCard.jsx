import { Link } from 'react-router';
import './FeaturedSongCard.scss';

export default function FeaturedSongCard({ data }) {

    return (
        <li className='featured-song-card'>
            <Link to={'#'} className='featured-song-card__link'>
                <img className='featured-song-card__image' src={data.imgUrl} alt={`Featured image of ${data.title}`} />
                <div className='featured-song-card__gradient-canvas'></div>
                <div className='featured-song-card__text-container'>
                    <h3>{data.title}</h3>
                    <p className='featured-song-card__text'>{data.category}</p>
                </div>
            </Link>
        </li>
    )
}