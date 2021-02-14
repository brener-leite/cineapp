import styled from 'styled-components';

import { color } from '../../styles/variables';

export const MenuStyle = styled.nav`
    z-index: 2;
    position: fixed;
    top: 70px;
    bottom: 0;
    left: ${props => props.isActive ? 0 : '-320px'};
    transition: 0.5s;
    width: 320px;
    background-color: ${color.surface};
`;

export const Container = styled.div`
    padding: 40px 20px;
`;

export const List = styled.ul`
    li {
        a {
            color: ${color.white}
        }
    }
`;