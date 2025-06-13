import FeaturedSongCard from "./cards/FeaturedSongCard";
import './FeaturedMain.scss';

const data = {
    songs: [
        {
            id: 'featured1',
            title: 'Title One',
            category: 'Category One',
            imgUrl: '/images/1.jpg'
        },
        {
            id: 'featured2',
            title: 'Title Two',
            category: 'Category One',
            imgUrl: '/images/2.jpg'
        },
        {
            id: 'featured3',
            title: 'Title Three',
            category: 'Category Two',
            imgUrl: '/images/3.jpg'
        },
        {
            id: 'featured4',
            title: 'Title Four',
            category: 'Category One',
            imgUrl: '/images/4.jpg'
        },
        {
            id: 'featured5',
            title: 'Title Five',
            category: 'Category Three',
            imgUrl: '/images/5.jpg'
        }
    ]
}

export default function FeaturedMain() {

    return (
        <main className="featured">
            <h2>Featured</h2>
            <ul className="featured__list">
                {data?.songs.map(song => {
                    return (
                        <FeaturedSongCard key={song.id} data={song} />
                    )
                })}
            </ul>
        </main>
    )
}