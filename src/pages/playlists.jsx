import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PlaylistsMain from "../components/PlaylistsMain";
import SoundWave from '/images/sound-wave.svg';

export default function playlistsPage() {

    return (
        <>
            <BackgroundImage imageUrl={SoundWave} />
            <Header title="Playlists" backgroundImage={true} />
            <PlaylistsMain backgroundImage={true} />
            <Footer />
        </>
    )
}