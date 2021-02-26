import styled from 'styled-components';

import { COLOR } from '../../styles/variables';

export const MenuStyle = styled.nav`
    z-index: 2;
    position: fixed;
    top: 0;
    left: ${props => props.isActive ? 0 : '-320px'};
    transition: 0.5s;
    width: 320px;
    background-color: ${COLOR.PRIMARY};
    height: 100vh;
    overflow-y: auto;
`;

export const Container = styled.div`
    padding: 40px 40px;
`;

export const List = styled.ul`
    padding-top: 10px;
    padding-bottom: 10px;
    li {
        padding: 5px 10px;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
            background-color: ${COLOR.LIGHT};
        }
        a {
            color: #fff;
            margin-left: 10px;
            font-size: 12px;
        }
    }
`;

export const Icon = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 40px;

    svg {

    }
`;

export const ListTitle = styled.h3`
    text-transform: uppercase;
    font-weight: 500;
    color: #fff;
`;

export const Close = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`;