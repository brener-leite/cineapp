import React, { useEffect, useState } from 'react';

import Navbar from '../../components/navbar';
import { DefaultStyle } from './style';

const Default = ({ children }) => {


    return(
        <DefaultStyle>
            <Navbar />
            {children}
        </DefaultStyle>
    );
}

export default Default;