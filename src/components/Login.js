
import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import Social from './Social';
import { FaFacebookF, FaInstagram, FaLinkedin, FaUser, FaEdit } from 'react-icons/fa';

const Login = () => {
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [linkedIn, setLinkedIn] = useState(false);


  return (
    <section className="content-container">

      <div className="preference">
        <div className="left">
                <p className='user-icon'>
                    <FaUser className='icon'/>
                </p>
            <p className='edit'> <span>Team TS</span> <FaEdit className='edit-icon'/> <br />
            Team ts email.com
             </p>

        </div>
        <div className="right">
            <p>My Preferences</p>
            <div>
                <div>
                    <p>Theme Preference</p>
                    <p>Landing Page</p>
                </div>
                <div>
                    <select name="" id="">
                        <option value="System Default">System Default</option>
                        <option value="System Default">Dark</option>
                        <option value="System Default">White</option>
                    </select>

                    <select name="" id="">
                        <option 
                        value="My Profile">My Profile</option>
                        <option value="Log Out">Log Out</option>
                        <option value="Setting">Setting</option>
                    </select>

                </div>
            </div>
        </div>

      </div>
      
      <div className="social-connection">
      {facebook ? <div className="empty"></div> : ''}
      {instagram ? <div style={{background:'red'}} className="empty"></div> : ''}
      {linkedIn ? <div style={{background:'yellow'}} className="empty"></div> : ''}
      <Social Icon={FaFacebookF} className={'facebook'} state={facebook} setState={setFacebook}>{'facebook'}</Social>
      <Social Icon={FaInstagram} className={'instagram'} state={instagram} setState={setInstagram}>{'instagram'}</Social>
      <Social Icon={FaLinkedin} className={'linkedIn'} state={linkedIn} setState={setLinkedIn}>{'linkedin'}</Social>
      </div>

    </section>
  );
};

export default Login;
