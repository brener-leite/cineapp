import React from 'react';

import { HeaderStyle } from './style';

const Header = ({ children, setMenuActive }) => {

    return (
        <HeaderStyle>
            <button onClick={() => setMenuActive(true)}>Click</button>
        </HeaderStyle>
    );
}

export default Header;