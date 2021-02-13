import styled from 'styled-components';

import { color } from '../../styles/variables';

export const HeaderStyle = styled.header`
    position: relative;
    height: 70px;
    background-color: ${color.surface};
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 40px;
`;

export const Logo = styled.a`
    display: inline-block;
    padding: 0 15px;
    span {
        font-size: 22px;
        font-weight: 500;
        /* text-transform: uppercase; */
        color: ${color.white}
    }
`;