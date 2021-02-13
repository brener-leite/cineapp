import styled from 'styled-components';

export const MenuStyle = styled.nav`
    z-index: 2;
    position: fixed;
    top: 0;
    bottom: 0;
    left: ${props => props.isActive ? 0 : '-320px'};
    transition: 0.5s;
    width: 320px;
`;

export const Container = styled.div`
    padding: 40px 20px;
`;

export const List = styled.ul`
    
`;