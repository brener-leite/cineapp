import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ThemeSwitcher from "react-theme-switcher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { color } from '../../styles/variables';
import { HeaderStyle, Logo, Container } from './style';
import { fetchGenres } from '../../store/actions/genres';

const Header = ({ 
    children,
    setActiveMenu,
    isMenuActive,
    genres,
    fetchGenres,
}) => {

    
    useEffect(() => {
        fetchGenres();
    }, [])

    useEffect(() => {
        console.log(genres)
    }, [genres])

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
        popular: state.popular,
        genres: state.genres
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        fetchGenres: () => {
            dispatch(fetchGenres())
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(Header);