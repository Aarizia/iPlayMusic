import { Link } from 'react-router';
import './AlbumsMain.scss';
import NewReleasesAlbumCard from './cards/NewReleasesAlbumCard';
import { useEffect, useState } from 'react';
import PlayerSmall from './PlayerSmall';

const data = {
    featuredAlbums: [
        {
            id: 'featuredAlbums1',
            title: 'Featured Title 1',
            imgUrl: '/images/1.jpg'
        },
        {
            id: 'featuredAlbums2',
            title: 'Featured Title 2',
            imgUrl: '/images/2.jpg'
        },
        {
            id: 'featuredAlbums3',
            title: 'Featured Title 3',
            imgUrl: '/images/3.jpg'
        },
        {
            id: 'featuredAlbums4',
            title: 'Featured Title 4',
            imgUrl: '/images/4.jpg'
        },
        {
            id: 'featuredAlbums5',
            title: 'Featured Title 5',
            imgUrl: '/images/5.jpg'
        }
    ],
    newReleasesAlbums: [
        {
            id: 'newReleasesAlbums1',
            title: 'New Releases Title 1',
            artist: 'Artist 1',
            imgUrl: '/images/1.jpg',
            tracks: 12
        },
        {
            id: 'newReleasesAlbums2',
            title: 'New Releases Title 2',
            artist: 'Artist 2',
            imgUrl: '/images/2.jpg',
            tracks: 8
        },
        {
            id: 'newReleasesAlbums3',
            title: 'New Releases Title 3',
            artist: 'Artist 3',
            imgUrl: '/images/3.jpg',
            tracks: 13
        },
        {
            id: 'newReleasesAlbums4',
            title: 'New Releases Title 4',
            artist: 'Artist 4',
            imgUrl: '/images/4.jpg',
            tracks: 11
        },
        {
            id: 'newReleasesAlbums5',
            title: 'New Releases Title 5',
            artist: 'Artist 5',
            imgUrl: '/images/5.jpg',
            tracks: 5
        }
    ]
}

export default function AlbumsMain() {

    const [albumsData, setAlbumsData] = useState(data);
    const [featuredListItems, setFeaturedListItems] = useState([]);
    const [newRealeasesListItems, setNewReleasesListItems] = useState([]); 

    useEffect(() => {

        setFeaturedListItems(

            albumsData.featuredAlbums.map(album => {
                        return (
                            <li key={album.id} className='albums-featured__item'>
                                <Link to={`/albums/${album?.id}`}>
                                    <img src={album.imgUrl} alt={`Image of ${album.title}`} className='albums-featured__image' />
                                </Link>
                            </li>
                        )
                    })
        );

        setNewReleasesListItems(
            albumsData.newReleasesAlbums.map(album => <NewReleasesAlbumCard key={album.id} data={album} className='albums-new-releases__item' />)
        );

    }, [albumsData]);

    return (
        <main className="albums">
            <h2 className='albums__title'>All Albums</h2>
            <section className='albums-featured'>
                <h3 className='albums__heading'>Featured Albums</h3>
                <Link to={'/albums/featured-albums'} className='albums__link'>View All</Link>
                <ul className='albums-featured__list'>
                    {featuredListItems}
                </ul>
            </section>
            <section className='albums-new-releases'>
                <h3 className='albums__heading'>New Releases</h3>
                <Link to={'/albums/new-realeases'} className='albums__link'>View All</Link>
                <ul className='albums-new-releases__list'>
                    {newRealeasesListItems}
                </ul>
            </section>
            <PlayerSmall />
        </main>
    )
}