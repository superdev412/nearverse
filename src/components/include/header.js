import '../../assets/css/include/header.css';
import logo from '../../assets/img/logo.png'
import menuIcon from '../../assets/img/mobile-menu-btn.png';
import closeIcon from '../../assets/img/close.png';
import React, { useState } from 'react';

function Header(props) {
  const [modalflag, setModalflag] = useState(false);
  const closemodal = () => {
    setModalflag(false)
  }
  const showmodal = () => {
    setModalflag(true)
  }
  return (
    <div>
      <div className="mobile-link-part" style={{ display: modalflag ? 'block' : 'none' }}>
        <div className="nav-bar-mobile row">
          <div className="col-lg-6 col-md-4">
            <img className="logo-img-mobile" src={logo}/>
          </div>
          <div className="col-lg-6 col-md-8">
            <div>
              <img className="mobile-close-icon" src={closeIcon} onClick={closemodal} />
            </div>
          </div>
        </div>
        <div style={{marginTop:'50px'}}>
          <div className="mobile-link-con">
            <a href="https://apac-rm.roadmunk.com/publish/0040a472d0cb54006e3860838e8347d77a757f0f" className="link-btn" onClick={closemodal}>Roadmap</a>
          </div>
          <div className="mobile-link-con">
            <a href="#about" className="link-btn" onClick={closemodal}>What are we Building?</a>
          </div>
          <div className="mobile-link-con">
            <a href="#team" className="link-btn" onClick={closemodal}>Team</a>
          </div>
          <div className="mobile-link-con">
            <a href="#faq" className="link-btn" onClick={closemodal}>Dummy</a>
          </div>
          <div className="mobile-link-con">
            <a href="#roadmap" className="link-btn" onClick={closemodal}>Dummy</a>
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="nav-bar row">
          <div className="col-lg-6 col-md-4 ">
            <img className="logo-img" src={logo}/>
          </div>
          <div className="col-lg-6 col-md-8 left-nav">
            <div className="link-part">
              <div className="link-con">
                <a href="https://apac-rm.roadmunk.com/publish/0040a472d0cb54006e3860838e8347d77a757f0f" className="link-btn">Roadmap</a>
              </div>
              <div className="link-con">
                <a href="#about" className="link-btn">What are we Building?</a>
              </div>
              <div className="link-con">
                <a href="#team"p className="link-btn">Team</a>
              </div>
              <div className="link-con">
                <a href="#faq" className="link-btn">Dummy</a>
              </div>
              <div className="link-con">
                <a href="#roadmap"p className="link-btn">Dummy</a>
              </div>
            </div>
            <div>
              <img className="mobile-menu-icon" src={menuIcon} onClick={showmodal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;