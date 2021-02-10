import React, {useEffect, useState} from 'react';

import Repository from '../../services/repository';
import { MenuStyle, Container, List } from './style';

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
            <button onClick={() => setActive(false)}>X</button>
            <Container>
                <div></div>
                <div>
                    <List>
                        {useGenres.map((genre, index) => {
                            return (
                                <li key={index}>
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

export default Menu;