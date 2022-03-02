import '../../assets/css/gallery/introduction.css';

import bgVd from '../../assets/img/bg-video.mp4'

function Introduction() {
    return(
        <div id="getone" style={{paddingBottom:'300px'}}>
            <div className='video-part'>
                <video muted src={bgVd} className="bg-video" autoPlay playsinline loop preload="auto">
                    <source src={bgVd} type="video/mp4" />
                </video>
            </div>
            <div className='intro-main-part'>
                <p className='intro-header'>Homes in NEARverse:<br /> Galleries that NEAR art deserves</p>
                <p className='intro-description'>3333 homes having the power to integrate with your NEAR wallet and showcasing your NEAR NFTs.</p>
                <div className='intro-button-part'>
                    <button className='preview-button'>Preview Gallery</button>
                    <button className='get-button'>How to Get one?</button>
                </div>
            </div>
        </div>
    )
}

export default Introduction;