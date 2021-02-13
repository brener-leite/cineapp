import React from 'react';

import { HeaderStyle, Logo } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ children, setMenuActive }) => {

    return (
        <HeaderStyle>
            <button onClick={() => setMenuActive(true)}>
                <FontAwesomeIcon icon={faBars} size="2x" style={{color: '#fff'}} />
            </button>
            <Logo href="/home">
                <span>
                    CineApp
                </span>
            </Logo>
        </HeaderStyle>
    );
}

export default Header;