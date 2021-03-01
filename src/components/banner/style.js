import styled from 'styled-components';

import { COLOR } from '../../styles/variables';

export const ImageContainer = styled.div`
    max-height: 900px;
    width: 100%;
    overflow-y: hidden;

    a {
        display: block;
        img {
            display: block;
            width: 100%;
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    .slick-slider {
        position: relative;
        .slick-list {
            .slick-track {
                display: flex;
            }
        }
        .slick-dots {
            display: flex !important;
            flex-direction: row;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            li {
                button {
                    font-size: 0;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background-color: ${COLOR.LIGHT};
                    margin: 5px;
                    cursor: pointer;
                }
                &.slick-active {
                    button {
                        background-color: ${COLOR.DARKER};
                    }
                }
            }
        }
    }
`;

