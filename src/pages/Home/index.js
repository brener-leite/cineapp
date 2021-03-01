import React from 'react';
import { connect } from 'react-redux';

import Default from '../../layouts/default';
import Banner from '../../components/banner';


const Home = () => {

    return (
        <Default>
           <Banner />
        </Default>
    );
}

export default Home;