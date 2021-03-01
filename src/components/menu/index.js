import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faFilm, faTimes, faStar, faFireAlt, faForward } from '@fortawesome/free-solid-svg-icons';

import { fetchGenres } from '../../store/actions/genres';
import { fetchImages } from '../../store/actions/images';
import { MenuStyle, Container, List, Icon, ListTitle, Close } from './style';

const Menu = ({ 
    isActive, 
    setActive,
    genres,
    fetchGenres
}) => {

    useEffect(() => {
        fetchGenres();
    }, []);

    return (
        <MenuStyle isActive={isActive}>
            <Container>
                <Close onClick={() => setActive(!isActive)}>
                    <FontAwesomeIcon icon={faTimes} size="2x" style={{color: '#fff'}} />
                </Close>
                <Icon>
                    <FontAwesomeIcon icon={faPlayCircle} size="4x" style={{color: '#fff'}} />
                </Icon>
                <div>
                    <div>
                        <ListTitle>Discover</ListTitle>
                    </div>
                    <List>
                        <li>
                            <FontAwesomeIcon icon={faFireAlt} size="1x" style={{color: '#fff'}} />
                            <a>Popular</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faStar} size="1x" style={{color: '#fff'}} />
                            <a>Top rated</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faForward} size="1x" style={{color: '#fff'}} />
                            <a>Upcoming</a>
                        </li>
                    </List>
                </div>
                <div>
                    <div>
                        <ListTitle>Genres</ListTitle>
                    </div>
                    <List>
                        {genres.data.map((genre, index) => {
                            return (
                                <li key={index}>
                                    <FontAwesomeIcon icon={faFilm} size="1x" style={{color: '#fff'}} />
                                    <a>{genre.name}</a>
                                </li>
                            )
                        })}
                    </List>
                </div>
            </Container>
        </MenuStyle>
    );
}

const mapStateToProps = state => {
    return {
        genres: state.genres,
        images: state.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGenres: () => {
            dispatch(fetchGenres());
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Menu);