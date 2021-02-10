import React, { useEffect, useState } from 'react';

import Menu from '../../components/menu';
import Header from '../../components/header';

import { DefaultStyle } from './style';
import { GlobalStyle } from '../../styles/global';

const Default = ({ children }) => {
    const [useMenuActive, setMenuActive] = useState(false);

    return(
        <DefaultStyle>
            <GlobalStyle />
            <Header setMenuActive={setMenuActive} />
            <Menu isActive={useMenuActive} setActive={setMenuActive} />
            {children}
        </DefaultStyle>
    );
}

export default Default;