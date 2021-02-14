import React, { useEffect } from 'react';

import { HeaderStyle, Logo, Container } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { changeTheme } from '../../store/actions/theme';
import ThemeSwitcher from "react-theme-switcher";

import { connect } from 'react-redux';
import { color } from '../../styles/variables';

function Header({ children,
    setMenuActive,
    popular,
    changeTheme,
    theme
}) {

    useEffect(() => {
        console.log('att ', theme)
    }, [theme]);

    return (
        <HeaderStyle>
            <Container>
                <button onClick={() => setMenuActive(true)}>
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
                />
            </Container>
        </HeaderStyle>
    );
}

function mapStateToProps(state) {
    return {
        theme: state.theme,
        popular: state.popularMovies
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        changeTheme(newTheme) {
            // action creator -> action
            const action = changeTheme(newTheme);
            dispatch(action);
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(Header);