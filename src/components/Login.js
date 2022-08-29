import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import Social from './Social';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaUser,
  FaEdit,
  FaArrowRight,
  FaArrowDown,
} from 'react-icons/fa';
import LinkedInPage from './LinkedIn';
import Instagram from './Instagram';
import Facebook from './Facebook';

const Login = () => {
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [linkedIn, setLinkedIn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch('')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <section className="content-container">
      <div className="preference">
        <div className="left">
          <p className="user-icon">
            <FaUser className="icon" />
          </p>
          <p className="edit">
            {' '}
            <span>Team TS</span> <FaEdit className="edit-icon" /> <br />
            Team ts email.com
          </p>
        </div>
        <div className="right">
          <p className="top">My Preferences</p>

          <div className="bottom">
            <div className="title">
              <p>Theme Preference</p>
              <br />
              <br />
              <p>Landing Page</p>
            </div>

            <div className="functionality">
              <select style={{ padding: '.3rem 1rem' }} name="" id="">
                <option value="System Default">System Default</option>
                <option value="System Default">Dark</option>
                <option value="System Default">White</option>
              </select>
              <br />
              <br />
              <select style={{ padding: '.3rem 1rem' }} name="" id="">
                <option value="My Profile">My Profile</option>
                <option value="Log Out">Log Out</option>
                <option value="Setting">Setting</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="social-connection">
        <div className='top'>
          {' '}
          
          <span onClick={() => setOpen(!open)}>{open ? <FaArrowDown /> : <FaArrowRight />} </span>
          
          Manage Social Media
          Connections

          
        {open && (
          <div>
            {facebook && <div className="empty faColor"></div> }
            {instagram && <div className='empty instColor'></div> }
            {linkedIn && <div className='empty linkColor'></div>}
            
            {/* These are the component Reusable */}
            <Social
              Icon={FaFacebookF}
              className={'facebook'}
              state={facebook}
              setState={setFacebook}
            >
              {'facebook'}
            </Social>

            <Social
              Icon={FaInstagram}
              className={'instagram'}
              state={instagram}
              setState={setInstagram}
            >
              {'instagram'}
            </Social>
            <Social
              Icon={FaLinkedin}
              className={'linkedIn'}
              state={linkedIn}
              setState={setLinkedIn}
            >
              {'linkedin'}
            </Social>
          </div>
        )}
        </div>
        <div className='center'>
          {' '}
          <FaArrowRight /> Manage Companies
        </div>
        <div className='bottom'>
          {' '}
          <FaArrowRight /> Feature Management
        </div>

      </div>
      <br />
      <LinkedInPage/> <br /> <br />
      <Instagram/> <br /> <br />
      <Facebook/>
    </section>
  );
};

export default Login;


// Those three components are api implemented 