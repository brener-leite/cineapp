import styled from 'styled-components';

export const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100vw;
    background-color: #000;
    opacity: ${props => props.opacity || 0}
`;