import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { color } from '../../styles/variables';
import { HeaderStyle, Logo, Container, MenuButton } from './style';

const Header = ({ 
    children,
    setActiveMenu,
    isMenuActive
}) => {

    return (
        <HeaderStyle>
            <Container>
                <MenuButton onClick={() => setActiveMenu(!isMenuActive)}>
                    <FontAwesomeIcon icon={faBars} size='2x' style={{color: '#fff'}} />
                    <span />
                </MenuButton>
                <Logo href="/home">
                    <span>
                        CineApp
                    </span>
                </Logo>
            </Container>
        </HeaderStyle>
    );
}

// const mapStateToProps = state => {
//     return {
//         popular: state.popular,
//         genres: state.genres
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchGenres: () => {
//             dispatch(fetchGenres());
//         },
//         fetchPopular: () => {
//             dispatch(fetchPopular());
//         }
//     };
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Header);

export default Header;