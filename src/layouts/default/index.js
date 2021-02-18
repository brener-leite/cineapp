import React, { useEffect, useState } from 'react';

import Menu from '../../components/menu';
import Header from '../../components/header';

import { DefaultStyle } from './style';
import { GlobalStyle } from '../../styles/global';

const Default = ({ children }) => {
    const [useActiveMenu, setActiveMenu] = useState(false);

    return(
        <DefaultStyle>
            <GlobalStyle />
            <Header setActiveMenu={setActiveMenu} isMenuActive={useActiveMenu} />
            <Menu isActive={useActiveMenu} setActive={setActiveMenu} />
            {children}
        </DefaultStyle>
    );
}

export default Default;