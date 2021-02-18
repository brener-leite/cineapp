import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { color } from '../../styles/variables';

import { HeaderStyle, Logo, Container } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ThemeSwitcher from "react-theme-switcher";
import { setTheme } from '../../store/actions/theme';

const Header = ({ 
    children,
    setActiveMenu,
    isMenuActive
}) => {

    return (
        <HeaderStyle>
            <Container>
                <button onClick={() => setActiveMenu(!isMenuActive)}>
                    <FontAwesomeIcon icon={faBars} size='2x' style={{color: '#fff'}} />
                </button>
                <Logo href="/home">
                    <span>
                        CineApp
                    </span>
                </Logo>
            </Container>

            <Container>
                <ThemeSwitcher
                    switcherColor={color.white}
                    darkColor='#000'
                />
            </Container>
        </HeaderStyle>
    );
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        popular: state.popular,
        genres: state.genres
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        setTheme: (newTheme) => {
            console.log('entrou aqui')
            dispatch(setTheme(newTheme))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(Header);