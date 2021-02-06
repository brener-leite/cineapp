import React, {useState, useEffect} from 'react';

import { Nav } from './style';

const Navbar = () => {
    const [useScroll, setScroll] = useState(false);

    useEffect(() => {
        isScrolling();
    }, []);

    function isScrolling() {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset == 0) {
                setScroll(true);
            }
            else {
                setScroll(false);
            }
        });
    }

    return (
        <Nav isFluctuant={useScroll}>
            <div></div>
        </Nav>
    );
}

export default Navbar;