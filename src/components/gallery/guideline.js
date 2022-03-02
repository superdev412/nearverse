import '../../assets/css/gallery/guideline.css';
import nftImg from '../../assets/img/Block_3.gif';
import guideImg from '../../assets/img/Block_3.png';

function Guideline() {
    return(
        <div className='guideline-content'>
            <div id="turtles" className='nft-guideline-part'>
                <img src={nftImg} className="nft-guideline-img" />
                <div className='guideline-description-part'>
                    <div>
                        <p className='guideline-header'>How to get your own home in NEARverse?</p>
                        <p className='guideline-description'>You need to have at least one “Undead Turtles” NFT in your wallet. Take a peek at the collection and read more about the launch here:</p>
                    </div>
                </div>
            </div>
            <div id="roadmap" className='nft-guideline-part' style={{marginTop:'70px'}}>                
                <img src={guideImg} className="nft-guideline-img1 guideline-mobile" />
                <div className='guideline-description-part1'>
                    <div>
                        <p className='guideline-header'>The Metaverse in works</p>
                        <p className='guideline-description'>Is NEARverse just a 3D gallery?  Absolutely not. Galleries are the first step toward building</p>
                        <p className='guideline-meta-description'>Find out more about the future on our Roadmap</p>
                    </div>
                </div>
                <img src={guideImg} className="nft-guideline-img1 guideline-main" />
            </div>
        </div>
    )
}

export default Guideline;