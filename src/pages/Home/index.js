import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import Repository from '../../services/repository';
import Default from '../../layouts/default';
import Banner from '../../components/banner';

import { ContainerSlider } from './style';

const Home = () => {
    const api = new Repository();
    const [usePopularMovies, setPopularMovies] = useState([]);

    const getPopular = async() => {
        const { data: { results } } = await api.getPopular();
        setPopularMovies(results);
    }

    useEffect(() => {
        getPopular();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        initialSlide: 1
    };

    return (
        <Default>
            <ContainerSlider>
                <Slider {...settings}>
                    {usePopularMovies.map((movie, index) => {
                        return(
                            <Banner key={index} movie={movie} />
                        );
                    })}
                </Slider>
            </ContainerSlider>
        </Default>
    );
}

export default Home;