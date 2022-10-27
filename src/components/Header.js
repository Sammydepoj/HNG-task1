import React from 'react'
import userPic from '../components/assets/user.svg'
const Header = () => {
  return (
    <div className="Header">
        <img id={'profile_img'} src={userPic} />
        <p id={'twitter'}className="userName">Sammydepoj</p>
    </div>
  )
}

export default Header