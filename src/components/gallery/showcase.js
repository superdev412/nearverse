import React, { useState } from 'react';

import '../../assets/css/gallery/showcase.css';
import Slide from '../include/slide';

function Showcase() {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);

    const select_first = () =>{
        setFirst(true)
        setSecond(false)
    }
    const select_second = () =>{
        setFirst(false)
        setSecond(true)
    }
    return(
        <div>
            <p className='showcase-header'>Showcase</p>
            <div className='main-slide-part'>
                <Slide />
            </div>
        </div>
    )
}

export default Showcase;