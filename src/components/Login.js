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
import SelectAction from './SelectAction';
import {
  profileSelectAction,
  themeSelectAction,
} from '../constants/SelectActionConstants';

const Login = ({ username = 'Team TS', userEmail = 'Team ts email.com', userImg = 'sldfa' }) => {

  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [linkedIn, setLinkedIn] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <section className="content-container">

      <div className="preference">

        <div className="left">
          <div className="user-img-box">
            <img className='user-img' src={userImg} alt="" />
          </div>
          <span className='user-name'>{username} <FaEdit className="edit-icon" /></span> 
          <p className="user-email">{userEmail} </p>
        </div>

        <div className="right">
          <p className="heading">My Preferences</p>

          <div className='right-top-component theme'>
            <p className='title'>Theme Preference</p>
            <select
                style={{
                  padding: '.3rem 1rem',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                {themeSelectAction.map((selectData) => (
                  <SelectAction selectData={selectData} />
                ))}
              </select>
          </div>

          <div className="right-top-component profile">
              <p className="title">Landing Page</p>
              <select
                style={{ padding: '.3rem 1rem', display: 'block' }}
              >
                {profileSelectAction.map((selectData) => (
                  <SelectAction selectData={selectData} />
                ))}
              </select>
          </div>
        </div>
      </div>

      <div className="social-connection">
        <div className="social-login">
          <span onClick={() => setOpen(!open)}>
            {open ? <FaArrowDown /> : <FaArrowRight />}{' '}
          </span>
          Manage Social Media Connections
          {open && (
            <div>

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
        <div className="manage-companies">
          <FaArrowRight /> Manage Companies
        </div>
        <div className="feature-management">
          <FaArrowRight /> Feature Management
        </div>
      </div>
    </section>
  );
};

export default Login;
