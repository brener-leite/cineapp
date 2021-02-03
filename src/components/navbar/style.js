import styled from 'styled-components';

export const Nav = styled.nav`
    top: 0;
    left: 0;
    transition: 0.5s;
    height: 70px;
    width: 100vw;
    position: ${props => props.isFluctuant ? 'fixed' : 'relative'};
    opacity: ${props => props.isFluctuant ? 0.8 : 0};
    background-color: #292929;
`;