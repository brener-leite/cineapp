import styled from 'styled-components';

export const Title = styled.h1`
    color: ${props => props.color || '#000'};
    font-size: 12px;
`;

export const ContainerSlider = styled.div`
    width: 100%;
    max-height: 200px;
`;