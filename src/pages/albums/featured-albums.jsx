import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewReleasesAlbumCard from '../../components/cards/NewReleasesAlbumCard';
import './featured-albums.scss';

const data = {
    featuredAlbums: [
        {
            id: 'featuredAlbums1',
            title: 'Featured Title 1',
            artist: 'Artist 1',
            imgUrl: '/images/1.jpg',
            tracks: 12
        },
        {
            id: 'featuredAlbums2',
            title: 'Featured Title 2',
            artist: 'Artist 2',
            imgUrl: '/images/2.jpg',
            tracks: 8
        },
        {
            id: 'featuredAlbums3',
            title: 'Featured Title 3',
            artist: 'Artist 3',
            imgUrl: '/images/3.jpg',
            tracks: 13
        },
        {
            id: 'featuredAlbums4',
            title: 'Featured Title 4',
            artist: 'Artist 4',
            imgUrl: '/images/4.jpg',
            tracks: 11
        },
        {
            id: 'featuredAlbums5',
            title: 'Featured Title 5',
            artist: 'Artist 5',
            imgUrl: '/images/5.jpg',
            tracks: 5
        },
        {
            id: 'featuredAlbums6',
            title: 'Featured Title 6',
            artist: 'Artist 6',
            imgUrl: '/images/1.jpg',
            tracks: 12
        },
        {
            id: 'featuredAlbums7',
            title: 'Featured Title 7',
            artist: 'Artist 7',
            imgUrl: '/images/2.jpg',
            tracks: 8
        },
        {
            id: 'featuredAlbums8',
            title: 'Featured Title 8',
            artist: 'Artist 8',
            imgUrl: '/images/3.jpg',
            tracks: 13
        },
        {
            id: 'featuredAlbums9',
            title: 'Featured Title 9',
            artist: 'Artist 9',
            imgUrl: '/images/4.jpg',
            tracks: 11
        },
        {
            id: 'featuredAlbums10',
            title: 'Featured Title 10',
            artist: 'Artist 10',
            imgUrl: '/images/5.jpg',
            tracks: 5
        }
    ]
}

export default function featuredAlbumsPage() {

    return (
        <>
            <Header title="Albums" />
            <main className='featured-albums'>
                <h2>Featured Albums</h2>
                <ul className='featured-albums__list'>
                    {data?.featuredAlbums.map(album => <NewReleasesAlbumCard key={album.id} data={album} />)}
                </ul>
            </main>
            <Footer />
        </>
    )
}