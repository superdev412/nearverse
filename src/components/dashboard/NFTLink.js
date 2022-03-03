import '../../assets/css/dashboard/NFTLink.css';
import launchpad from '../../assets/img/Launchpad_Icon.jpg'
import gallery from '../../assets/img/3D_Gallery_Icon.JPG'
import unread from '../../assets/img/Undead_Turtles_Icon.JPG'
import upcoming from '../../assets/img/Upcoming_projects_Icon.jpg'


function NFTLink() {

    const toGallery = () => {
        window.location.href = "./gallery"
    }

    return (
      <div id="gallery" className='NFTLink-content'>
        <h2 className='NFTLink-title1'>Here is what we are building now</h2>
        <div>
            <div className='NFTLink-row'>
                <div className='NFTLink-percon'>
                    <img src={launchpad} className="link-icon" />
                    <h3 className='NFTLink-title2'>NEARverse NFT Launchpad </h3>
                    <p style={{fontFamily: 'inherit',marginTop:'15px'}}>The Launchpad is free to all fully doxxed teams that do not have the dev resources. We believe that transparency increases accountability.  </p>
                </div>
                <div className='NFTLink-percon'>
                    <img src={gallery} onClick={toGallery} className="link-icon" />
                    <h3 className='NFTLink-title2'>Virtual 3D-Gallery</h3>
                    <p style={{fontFamily: 'inherit',marginTop:'15px'}}> Hyperrealistic virtual 3D gallery enables you to integrate with NEAR wallet and display your own NFTs. Watch the preview here.</p>
                </div>
            </div>
            <div className='NFTLink-row'>
                <div className='NFTLink-percon'>
                    <img src={unread} className="link-icon" />
                    <h3 className='NFTLink-title2'>Undead Turtles NFT Collection</h3>
                    <p style={{fontFamily: 'inherit',marginTop:'15px'}}>Holding at least one Undead Turtles NFT in your NEAR is the key to the NEARverse 3D Gallery. You are also entitled to a share of all future NEARverse projects. Take a peek at the Turtles here.</p>
                </div>
                <div className='NFTLink-percon'>
                    <img src={upcoming} className="link-icon" />
                    <h3 className='NFTLink-title2'>More innovations</h3>
                    <p style={{fontFamily: 'inherit',marginTop:'15px'}}>We are taking one step at a time at NEARverse and are also brainstorming more gamechanging ideas. More community centric innovations are yet to come</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default NFTLink