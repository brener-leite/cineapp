import React from 'react';

import Default from '../../layouts/default';

const Home = () => {
    console.log('here ', process.env.API_TOKEN)
    return (
        <Default>
            <div>
                Início
            </div>
        </Default>
    );
}

export default Home;