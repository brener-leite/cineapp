import React, { useEffect } from 'react';

import Repository from '../../services/repository';

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
        <div>
            Início
        </div>
    );
}

export default Home;