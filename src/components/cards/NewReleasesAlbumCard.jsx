import { Link } from 'react-router';
import './NewReleasesAlbumCard.scss';

export default function NewReleasesAlbumCard({ data }) {

    return (
        <li className='new-releases-album-card'>
            <Link to={'#'} className='new-releases-album-card__link'>
                <img src={data?.imgUrl} alt={`image of ${data.title}`} className='new-releases-album-card__image' />
                <h4 className='new-releases-album-card__title'>{data.title}</h4>
                <p  className='new-releases-album-card__artist'>{data.artist}</p>
                <p  className='new-releases-album-card__tracks'>{data.tracks} tracks</p>
            </Link>
        </li>
    )
}