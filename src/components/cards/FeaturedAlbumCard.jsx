import { Link } from 'react-router';
import './FeaturedAlbumCard.scss';

export default function FeaturedAlbumCard({ data }) {

    return (
        <li className='featured-album-card'>
            <Link to={`/albums/${data.id}`} className='featured-album-card__link'>
                <img className='featured-album-card__image' src={data.imgUrl} alt={data.title} />
                <div className='featured-album-card__gradient-canvas'></div>
                <div className='featured-album-card__text-container'>
                    <h3>{data.title}</h3>
                    <p className='featured-album-card__text'>{data.category}</p>
                </div>
            </Link>
        </li>
    )
}