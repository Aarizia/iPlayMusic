import AlbumDetailsMain from '../../components/AlbumDetailsMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackgroundImage from '../../components/BackgroundImage';

const data = {
    id: 'featuredAlbums1',
    title: 'Featured Title 1',
    imgUrl: '/images/4.jpg',
    genres: [
        'country', 'country road'
    ],
    numberOfTracks: 12,
    tracks: [
        {
            id: 'playlist 1 track 1',
            name: 'P1 Track 1',
            artist: 'Artist 1',
            duration: 9,
            albumImageUrl: '/images/1.jpg'
        },
        {
            id: 'playlist 1 track 2',
            name: 'P1 Track 2',
            artist: 'Artist 2',
            duration: 57,
            albumImageUrl: '/images/2.jpg'
        },
        {
            id: 'playlist 1 track 3',
            name: 'P1 Track 3',
            artist: 'Artist 3',
            duration: 290,
            albumImageUrl: '/images/3.jpg'
        },
        {
            id: 'playlist 1 track 4',
            name: 'P1 Track 4',
            artist: 'Artist 4',
            duration: 247,
            albumImageUrl: '/images/4.jpg'
        },
        {
            id: 'playlist 1 track 5',
            name: 'P1 Track 5',
            artist: 'Artist 5',
            duration: 1010,
            albumImageUrl: '/images/5.jpg'
        },
        {
            id: 'playlist 1 track 6',
            name: 'P1 Track 6',
            artist: 'Artist 6',
            duration: 3686,
            albumImageUrl: '/images/1.jpg'
        },
        {
            id: 'playlist 1 track 7',
            name: 'P1 Track 7',
            artist: 'Artist 7',
            duration: 5706,
            albumImageUrl: '/images/2.jpg'
        },
        {
            id: 'playlist 1 track 8',
            name: 'P1 Track 8',
            artist: 'Artist 8',
            duration: 959774,
            albumImageUrl: '/images/3.jpg'
        }
    ]
}

export default function AlbumDetailsPage() {

    return (
        <>
            <BackgroundImage imageUrl={data.imgUrl} aspectRatio='0.9375' gradientCanvas={true} />
            <Header title='Album' backgroundImage={true} />
            <AlbumDetailsMain data={data} backgroundImage={true} />
            <Footer />
        </>
    )
}