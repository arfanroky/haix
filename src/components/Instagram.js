import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import InstagramLogin from 'react-instagram-login';

const Instagram = () => {

    const responseInstagram = (response) => {
        console.log(response);
      }

    return (  
    <InstagramLogin
    clientId="5fd2f11482844c5eba963747a5f34556"
    onSuccess={responseInstagram}
    onFailure={responseInstagram}
  >
    <FaInstagram/>
    <span> Login with Instagram</span>
  </InstagramLogin>)
};

export default Instagram;