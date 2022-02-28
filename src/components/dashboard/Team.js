import '../../assets/css/dashboard/Team.css';
import member1 from '../../assets/img/Team_Member_1.png';
import member2 from '../../assets/img/Team_Member_2.png';
import member3 from '../../assets/img/Team_Member_3.png';
import member4 from '../../assets/img/Team_Member_4.png';
import member5 from '../../assets/img/Team_Member_5.png';

function Team() {
    return(
        <div className='team-content'>
            <p className='team-title'>Meet the Team</p>
            <div className='team-members'>
                <div className='member-part'>
                    <img src={member1} className="team-photo" />
                    <p className='member-name'>Tej Mirthinti </p>
                    <p style={{fontFamily: 'inherit',marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <p style={{fontWeight:'bold',marginTop:'30px'}}>Project Co-ordinator</p>
                </div>
                <div className='member-part'>
                    <img src={member2} className="team-photo" />
                    <p className='member-name'>Sushil Raghav (Jay) </p>
                    <p style={{fontFamily: 'inherit',marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <p style={{fontWeight:'bold',marginTop:'30px'}}>Developer</p>
                </div>
                <div className='member-part'>
                    <img src={member3} className="team-photo" />
                    <p className='member-name'>Vlad</p>
                    <p style={{fontFamily: 'inherit',marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <p style={{fontWeight:'bold',marginTop:'30px'}}>Developer</p>
                </div>
                <div className='member-part'>
                    <img src={member4} className="team-photo" />
                    <p className='member-name'>Jurgien Mehillaj </p>
                    <p style={{fontFamily: 'inherit',marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <p style={{fontWeight:'bold',marginTop:'30px'}}>3D gallery Architect</p>
                </div>
                <div className='member-part'>
                    <img src={member5} className="team-photo" />
                    <p className='member-name'>Ramandeep Kaur </p>
                    <p style={{fontFamily: 'inherit',marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <p style={{fontWeight:'bold',marginTop:'30px'}}>3D Artist </p>
                </div>
            </div>
        </div>
    )
}

export default Team;