import React, { useEffect } from 'react';

import Repository from '../../services/repository';
import Default from '../../layouts/default';

const Home = () => {
    const api = new Repository;

    const getGenres = async () => {
        const { data } = await api.getGenres();

        console.log('resposta: ', data.genres);
    }

    useEffect(() => {
        getGenres();
    }, []);

    return (
        <Default>
            <div>
                Início
            </div>
        </Default>
    );
}

export default Home;