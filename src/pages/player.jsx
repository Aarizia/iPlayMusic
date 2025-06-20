import BackgroundImage from '../components/BackgroundImage';
import Header from "../components/Header";
import PlayerMain from "../components/PlayerMain";

const data = {
    trackTitle: 'Track 1', 
    albumImageUrl: '/images/4.jpg',
    artist: 'Artist 1',
    artistImageUrl: '/images/1.jpg',
    duration: 200
}

export default function playerPage() {

    return (
        <>
            <BackgroundImage imageUrl={data.albumImageUrl} height='100vh' blur='1px' gradientCanvas={true} /> 
            <Header title="Playing" isPlayer={true} backgroundImage={data.albumImageUrl ? true : false} />
            <PlayerMain backgroundImage={data.albumImageUrl ? true : false} data={data} />
        </>
    )
}