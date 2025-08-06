import React, { useState } from 'react'
import './MoviesCarrousel.css'

import Starwars11 from '../images/starwars11.webp'
import Starwars12 from '../images/starwars12.webp'
import Starwars21 from '../images/starwars21.webp'
import Starwars22 from '../images/starwars22.webp'

const MoviesCarrousel = () => {


    const movies = [
        { id: 1, src1: Starwars11, src2: Starwars12, alt: 'Descripción pelicula', title: 'Star Wars Episodio 1: La amenaza fantasma' },
        { id: 2, src1: Starwars21, src2: Starwars22, title: 'Star Wars Episodio 2: El ataque de los clones' },
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