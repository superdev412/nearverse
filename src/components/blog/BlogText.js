import '../../assets/css/blog/BlogText.css';
import launchpad from '../../assets/img/Launchpad_Icon.jpg'
import gallery from '../../assets/img/3D_Gallery_Icon.JPG'
import unread from '../../assets/img/Undead_Turtles_Icon.JPG'
import upcoming from '../../assets/img/Upcoming_projects_Icon.jpg'


function BlogText() {

    const toGallery = () => {
        window.location.href = "./gallery"
    }

    return (
      <div id="gallery" className='blogText-content'>
          <p className='blogText-title'>What will you be able to do with Launchpad v1.0?</p>
          <div className='blogText-main-part'>
              <p className='blogText-description'>•	Auto generation of NFTs using layers (traits)</p>
              <p className='blogText-description'>•	Creating and deploying mint contract</p>
              <p className='blogText-description'>•	Creating and deploying a minting website</p>
              <p className='blogText-description'>•	Whitelist and Public Minting</p>
              <p className='blogText-description'>•	A smooth minting experience </p>
            <p className='blogText-metades'>Track our progress and upcoming features in v2.0 here:</p>
            <button className='blogText-roadmap-btn'>Roadmap</button>
          </div>
          <p className='blogText-title'>What is the catch?</p>
          <div className='blogText-main-part1'>
              <p className='blogText-description'>•	Launchpad is free to use for all publicly-doxxed teams with a well-defined roadmap</p>
              <p className='blogText-description'>•	We firmly believe transparency increases accountability</p>
              <p className='blogText-description'>•	 If your team chooses to remain anonymous, a flat fee of 1000 USD is charged.  </p>
              <p className='blogText-description'>•	<span style={{fontWeight:'bold'}}>10 percent of the royalties</span> from secondary markets are payable as fee for the first 30 days after listing. It applies to both doxxed and anonymous teams.</p>
            <button className='blogText-roadmap-btn' disabled style={{cursor:'no-drop'}}>Apply for listing </button>
          </div>
      </div>
    );
  }
  export default BlogText