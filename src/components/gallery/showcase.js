import React, { useState } from 'react';

import '../../assets/css/gallery/showcase.css';

import gallery1 from '../../assets/img/gallery1.png';
import gallery2 from '../../assets/img/gallery2.png';
import gallery3 from '../../assets/img/gallery3.png';
import gallery4 from '../../assets/img/gallery4.png';
import gallery5 from '../../assets/img/gallery5.png';
import selected from '../../assets/img/selected.png';
import nonSelected from '../../assets/img/non-selected.png';

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
            {first? 
            <div className='gallery-part'>
                <div className='individual-gallery-part'>
                    <img src={gallery1} className="gallery-img" />
                    <p className='gallery-description'>This is a Sample text.</p>
                </div>
                <div className='individual-gallery-part'>
                    <img src={gallery2} className="gallery-img" />
                    <p className='gallery-description'>This is a Sample text.</p>
                </div>
                <div className='individual-gallery-part'>
                    <img src={gallery3} className="gallery-img" />
                    <p className='gallery-description'>This is a Sample text.</p>
                </div>
            </div>
            :
            <div className='gallery-part'>
                <div className='individual-gallery-part'>
                    <img src={gallery4} className="gallery-img" />
                    <p className='gallery-description'>This is a Sample text.</p>
                </div>
                <div className='individual-gallery-part'>
                    <img src={gallery5} className="gallery-img" />
                    <p className='gallery-description'>This is a Sample text.</p>
                </div>
            </div>
            }
            <div className='gallery-select-part'>
                <div style={{cursor:'pointer'}} onClick={select_first}>
                    {first? <img src={selected} /> : <img src={nonSelected} />}
                </div>
                <div style={{marginLeft:'20px',cursor:'pointer'}} onClick={select_second}>
                    {second? <img src={selected} /> : <img src={nonSelected} />}
                </div>
            </div>
        </div>
    )
}

export default Showcase;