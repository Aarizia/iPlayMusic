import { Link } from 'react-router';
import './CategoriesMain.scss';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import '../style/_variables.scss';
import { useEffect, useState } from 'react';
import PlayerSmall from './PlayerSmall';

const data = {
    categories: [
        {
            id: 'categories1',
            name: 'Alternative',
            subGenres: [
                'Alternative 1',
                'Alternative 2',
                'Alternative 3',
                'Alternative 4',
                'Alternative 5'
            ]
        },
        {
            id: 'categories2',
            name: 'Blues',
            subGenres: [
                'Blues 1',
                'Blues 2',
                'Blues 3',
                'Blues 4',
                'Blues 5'
            ]
        },
        {
            id: 'categories3',
            name: 'Classical',
            subGenres: [
                'Classical 1',
                'Classical 2',
                'Classical 3',
                'Classical 4',
                'Classical 5',
            ],
        },
        {
            id: 'categories4',
            name: 'Country',
            subGenres: [
                'Country 1',
                'Country 2',
                'Country 3',
                'Country 4',
                'Country 5'
            ]
        },
        {
            id: 'categories5',
            name: 'Dance',
            subGenres: [
                'Dance 1',
                'Dance 2',
                'Dance 3',
                'Dance 4',
                'Dance 5'
            ]
        },
        {
            id: 'categories6',
            name: 'Electronic',
            subGenres: [
                'Electronic 1',
                'Electronic 2',
                'Electronic 3',
                'Electronic 4',
                'Electronic 5'
            ]
        },
        {
            id: 'categories7',
            name: 'Fitness & Workout',
            subGenres: [
                'Fitness & Workout 1',
                'Fitness & Workout 2',
                'Fitness & Workout 3',
                'Fitness & Workout 4',
                'Fitness & Workout 5'
            ]
        },
        {
            id: 'categories8',
            name: 'Hip-Hop/Rap',
            subGenres: [
                'Hip-Hop/Rap 1',
                'Hip-Hop/Rap 2',
                'Hip-Hop/Rap 3',
                'Hip-Hop/Rap 4',
                'Hip-Hop/Rap 5'
            ]
        },
        {
            id: 'categories10',
            name: 'Industrial',
            subGenres: [
                'Industrial 1',
                'Industrial 2',
                'Industrial 3',
                'Industrial 4',
                'Industrial 5'
            ]
        }
    ]
};


export default function CategoriesMain() {

    const [categoryData, setCategoryData] = useState(data);
    const [detailsElements, setDetailsElements] = useState([]);
    
    useEffect(() => {
        
        setDetailsElements(
            categoryData.categories.map(category => {
                return (
                    <details className='categories__details' key={category.id} name='detailsElement'>
                        <summary className='categories__summary'>
                            {category.name}
                            <HiOutlineDotsHorizontal className='categories__summary-icon' />
                        </summary>
                        <ul  className='categories__list'>
                            {category.subGenres.map(subGenre => {
                                return (
                                    <li key={subGenre} className='categories__item'>
                                        <Link to={'#'} className='categories__link'>
                                            {subGenre}
                                            <IoIosArrowForward className='categories__item-icon' />
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </details>
                )
            })
        );

    }, [categoryData]);

    
    return (
        <main className='categories'>
            <h2 className='categories__title'>Categories</h2>
            <div className='categories__details-container'>
                {detailsElements}
            </div>
            <PlayerSmall />
        </main>
    )
}