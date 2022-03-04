import '../../assets/css/blog/BlogHeader.css';
import HeaderBlog from '../include/headerBlog';
import blog from '../../assets/img/blog.png';

function BlogHeader() {
  return(
    <div className='title-part'>
      <div className='opacity-bg'>
        <HeaderBlog />
        <div className='main-blog'>
          <div className='main-blog-part'>
            <p className='blog-description'>Launch your NFT collection for free on $NEAR </p>
            <p className='blog-title'>NEARverse NFT Launchpad 1.0</p>
            <div className='blog-btn-part'>
              <button className='building-btn'>Learn More and Apply </button>
            </div>
          </div>
          <div className='blog-image-part'>
            <img src={blog} className="blog-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader;