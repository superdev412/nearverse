import '../../assets/css/include/footer.css';
import github from '../../assets/img/git-logo.png';
import twitter from '../../assets/img/twitter-logo.png';
import discord from '../../assets/img/discord-logo.png';

function Footer() {
    return(
        <div className='footer-content'>
            <img src={github} className="link-img" />
            <img src={twitter} className="link-img link-margin" />
            <img src={discord} className="link-img link-margin" />
        </div>
    )
}

export default Footer;