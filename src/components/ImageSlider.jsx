import { useRef } from 'react';
import './ImageSlider.scss';

export default function ImageSlider({ data, setCurrentSlide }) {

    const galleryRef = useRef();
    let timeOut = 0;
    
    function scrollHandler() {
        
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {

            const numberOfSlides = data.length;
            const sliderFullWidth = galleryRef.current?.scrollWidth;
            const currentScroll = galleryRef.current?.scrollLeft;
            const scrollPercentage = currentScroll/sliderFullWidth;
            const centeredSlide = Math.round(scrollPercentage * numberOfSlides);
            setCurrentSlide(centeredSlide);
            //console.log(centeredSlide);
        }, 1000);
    }

    return (
        <ul ref={galleryRef} className='gallery' onScroll={scrollHandler}>
            {data.map(playlist => {
                return (
                    <li key={playlist.id} className='gallery__item scroll-scale'>
                        <img className='gallery__image' src={playlist.imageUrl} alt={`Image of ${playlist.name}`} />
                    </li>
                )
            })}
        </ul>
    )
}