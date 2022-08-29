import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { FaFacebook } from 'react-icons/fa';

const Facebook = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div style={{}}>
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        buttonStyle={{
            padding:'1rem',
            background:'#2291F',
            color: 'white',
            textTransform: 'capitalize'

        }}
      />
    </div>
  );
};

export default Facebook;
