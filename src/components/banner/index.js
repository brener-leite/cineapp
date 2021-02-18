import React from 'react';

import { Image } from './style';

const Banner = ({ movie }) => {

    return (
        <a href={`/movie/${movie.id}`}>
            <Image src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`} />
        </a>
    );
}

export default Banner;