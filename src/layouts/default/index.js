import React, { useEffect, useState } from 'react';

import Navbar from '../../components/navbar';
import { DefaultStyle } from './style';
import { GlobalStyle } from '../../styles/global';

const Default = ({ children }) => {
    const [useScroll, setScroll] = useState(false);

    useEffect(() => {
        isScrolling();
    }, []);

    useEffect(() => {
        console.log(useScroll)
    }, [useScroll]);

    function isScrolling() {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 0) {
                setScroll(true);
            }
            else {
                setScroll(false);
            }
        });
    }

    return(
        <DefaultStyle>
            <GlobalStyle />
            <Navbar isFluctuant={useScroll}/>
            {children}
        </DefaultStyle>
    );
}

export default Default;