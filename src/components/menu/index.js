import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faFilm, faTimes } from '@fortawesome/free-solid-svg-icons';

import Repository from '../../services/repository';
import { MenuStyle, Container, List, Icon, ListTitle, Close } from './style';

const Menu = ({ isActive, setActive }) => {
    const api = new Repository();
    const [useGenres, setGenres] = useState([]);

    const getGenres = async() => {
        const {data} = await api.getGenres();

        return data;
    }

    useEffect(() => {
        getGenres().then((response) => {
            setGenres(response.genres);
        });
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
                        <ListTitle>Genres</ListTitle>
                    </div>
                    <List>
                        {useGenres.map((genre, index) => {
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
        genres: state.genres
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Menu);