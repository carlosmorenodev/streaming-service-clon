import React, { useState } from 'react'
import './MoviesCarrousel.css'

import Starwars11 from '../images/starwars11.webp'
import Starwars12 from '../images/starwars12.webp'

import Starwars21 from '../images/starwars21.webp'
import Starwars22 from '../images/starwars22.webp'

import Starwars31 from '../images/starwars31.jpg'
import Starwars32 from '../images/starwars32.webp'

import Starwars41 from '../images/starwars41.jpg'
import Starwars42 from '../images/starwars42.webp'

import Starwars51 from '../images/starwars51.jpg'
import Starwars52 from '../images/starwars52.webp'

import Starwars61 from '../images/starwars61.jpg'
import Starwars62 from '../images/starwars62.webp'

import Starwars71 from '../images/starwars71.jpg'
import Starwars72 from '../images/starwars72.webp'

import Starwars81 from '../images/starwars81.jpg'
import Starwars82 from '../images/starwars82.webp'

import Starwars91 from '../images/starwars91.jpg'
import Starwars92 from '../images/starwars92.webp'

const MoviesCarrousel = () => {


    const movies = [
        { id: 1, src1: Starwars11, src2: Starwars12, alt: 'La amenaza fantasma'  },
        { id: 2, src1: Starwars21, src2: Starwars22, alt: 'El ataque de los clones'  },
        { id: 3, src1: Starwars31, src2: Starwars32, alt: 'La venganza de los sith'  },
        { id: 4, src1: Starwars41, src2: Starwars42, alt: 'Una nueva esperanza'  },
        { id: 5, src1: Starwars51, src2: Starwars52, alt: 'El imperio contraataca'  },
        { id: 6, src1: Starwars61, src2: Starwars62, alt: 'El retorno del Jedi'  },
        { id: 7, src1: Starwars71, src2: Starwars72, alt: 'El despertar de la fuerza'  },
        { id: 8, src1: Starwars81, src2: Starwars82, alt: 'El último Jedi'  },
        { id: 9, src1: Starwars91, src2: Starwars92, alt: 'El ascenso de Skywalker'  },
    ]

    const [currentMovie, setCurrentMovie] = useState(movies[1])

    const handleClickThumbnail = (movie) => {
        setCurrentMovie(movie)
    }

    return (
        <>
            <div className="movies-carrousel">
                <div className="main-movie">
                    <img className='movie-poster' src={currentMovie.src2} alt="" />
                    {/* <div className="movie-data">
                        <h2>{currentMovie.title}</h2>
                    </div> */}
                </div>
                <div className="thumbsnails-container">
                    {movies.map((movie) => (
                        <img
                            key={movie.id}
                            className='thumbnail'
                            src={movie.src1}
                            alt={movie.alt}
                            onClick={() => handleClickThumbnail(movie)} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default MoviesCarrousel