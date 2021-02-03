import React, { useEffect, useState } from 'react';

import { Nav } from './style';

const Navbar = () => {
    const [useFluctuant, setFluctuant] = useState(false);



    return (
        <Nav isFluctuant={useFluctuant}>
            <div></div>
        </Nav>
    );
}

export default Navbar;