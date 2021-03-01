import styled from 'styled-components';

import { COLOR } from '../../styles/variables';

export const HeaderStyle = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    height: 70px;
    background-color: ${COLOR.PRIMARY};
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 40px;
    justify-content: space-between;
    opacity: 0.4;
    z-index: 1;
    transition: .3s;
    &:hover {
        opacity: 1;
    }
`;

export const Logo = styled.a`
    display: inline-block;
    padding: 0 15px;
    span {
        font-size: 22px;
        font-weight: 500;
        /* text-transform: uppercase; */
        color: #fff
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuButton = styled.button`
    position: relative;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        position: absolute;
        left: calc(50% - 4.5px);
        top: calc(50% - 4.5px);
        width: 9px;
        height: 9px;
        border-radius: 50%;
    }

    &:hover {
        background-color: rgba(144, 164, 174, .1);
    }

    &:focus, &:active {
        span {
            animation: pulse .2s ease;
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            background-color: rgba(144, 164, 174, .1);
        }
        25% {
            transform: scale(2);
            background-color: rgba(144, 164, 174, .3);
        }
        50% {
            transform: scale(3);
            background-color: rgba(144, 164, 174, .5);
        }
        75% {
            transform: scale(4);
            background-color: rgba(144, 164, 174, .3);
        }
        100% {
            transform: scale(5);
            background-color: rgba(144, 164, 174, .1);
        }
    }

    svg {
        z-index: 1;
    }
`;

