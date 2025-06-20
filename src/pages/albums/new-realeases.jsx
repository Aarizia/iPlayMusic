import NewReleasesAlbumCard from "../../components/cards/NewReleasesAlbumCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './featured-albums.scss';

const data = {
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
        },
        {
            id: 'newReleasesAlbums6',
            title: 'New Releases Title 6',
            artist: 'Artist 6',
            imgUrl: '/images/1.jpg',
            tracks: 17
        },
        {
            id: 'newReleasesAlbums7',
            title: 'New Releases Title 7',
            artist: 'Artist 7',
            imgUrl: '/images/2.jpg',
            tracks: 9
        },
        {
            id: 'newReleasesAlbums8',
            title: 'New Releases Title 8',
            artist: 'Artist 8',
            imgUrl: '/images/3.jpg',
            tracks: 16
        },
        {
            id: 'newReleasesAlbums9',
            title: 'New Releases Title 9',
            artist: 'Artist 9',
            imgUrl: '/images/4.jpg',
            tracks: 21
        },
        {
            id: 'newReleasesAlbums10',
            title: 'New Releases Title 10',
            artist: 'Artist 10',
            imgUrl: '/images/5.jpg',
            tracks: 3
        }
    ]
}

export default function newReleasesPage() {
    
    return (
        <>
            <Header title='Albums' />
            <main className="featured-albums">
                <h2>New Releases</h2>
                <ul className="featured-albums__list">
                    {data?.newReleasesAlbums.map(album => <NewReleasesAlbumCard key={album.id} data={album} />)}
                </ul>
            </main>
            <Footer />
        </>
    )
}