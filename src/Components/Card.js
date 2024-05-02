import React from 'react';
import './Card.css';
import profileLogo from '../svgs/user.svg';
import genderLogo from '../svgs/gender.svg';
import phoneLogo from '../svgs/phone.svg';

const ProfileCard = ({ image, firstName, gender, phoneNumber, lastName }) => {

  return (
    <div className='profile-card flex'>

      <div className='left-part'>
        <div className='image-part'>{image}</div>
      </div>
      <div className='right-part'>
        <div className='info-part'>

          <div className='flex gap-3'>
          <img src={profileLogo} alt='user' />
          <div className='name-data '>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
          </div>
          </div>
          <div className='other-data'>

          <div className='flex gap-3'>
            <img src={genderLogo} alt='gender' />
            <h3>{gender}</h3>
          </div>
          <div className='flex gap-3'>
            <img src={phoneLogo} alt='gender' />
            <h3>{phoneNumber}</h3>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfileCard;
