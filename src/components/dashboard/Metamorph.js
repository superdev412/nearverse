import '../../assets/css/dashboard/Metamorph.css';
import Header from '../include/header';

function Metamorph() {
  return(
    <div className='title-part'>
      <div className='opacity-bg'>
      <Header />
      <div className='main-part'>
        <p className='title'>Adding Value to NEAR Protocol </p>
        <p className='description'>NEARverse is building applications that benefit the ecosystem and contribute to the mass adaptation of $NEAR</p>
        <div className='btn-part'>
          <button className='building-btn'>What are we Building?</button>
          <button className="roadmap-btn" style={{marginLeft:'30px'}}>RoadMap</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Metamorph;