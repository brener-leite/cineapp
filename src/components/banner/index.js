import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import { ImageContainer, Container } from './style';
import { fetchPopular } from '../../store/actions/popular';

const Banner = ({ 
    popular,
    fetchPopular
}) => {

    useEffect(() => {
        fetchPopular();
    }, []);

    useEffect(() => {
        console.log(popular)
    }, [popular]);

    const sliderSettings = {
        dots: true,
        infite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <Container>
            <Slider {...sliderSettings}>
                {popular.data.map((movie, index) => {
                    while(index < 6) {
                        return(
                            <ImageContainer key={index}>
                                <a href={`/movie/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} loading='lazy' />
                                </a>
                            </ImageContainer>
                        );
                    }
                })}
            </Slider>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        popular: state.popular
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPopular: () => {
            dispatch(fetchPopular());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Banner);