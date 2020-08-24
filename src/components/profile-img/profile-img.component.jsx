import React from 'react';
import './profile-img.styles.css';
import avatar from '../img/avatar.png'


const ProfileImg = () => (
    <div className="profile-img">
        <img src={ avatar } alt='avatar' className="avatar"/>
    </div>
);

export default ProfileImg;