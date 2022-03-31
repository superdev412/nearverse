import React, { useState, useEffect } from 'react';
import HeaderGal from '../include/headerGal';
import '../../assets/css/roadmap/roadmap.css';

class Roadmap extends React.Component{ 
    
    render(){
        return(
            <div>
                <HeaderGal />
                <div className='iframe-part'>
                    <iframe src="https://apac-rm.roadmunk.com/publish/e6a7b7856b940c63a1de63cd6980d98dd5c59d89" className='roadmap-iframe' title="W3Schools Free Online Web Tutorials">
                    </iframe>
                </div>
            </div>
        )}
    }

export default Roadmap;