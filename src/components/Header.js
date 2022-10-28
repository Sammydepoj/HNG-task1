import React from 'react'
import userPic from '../components/assets/user.svg'
import share from '../components/assets/sharebtn1.svg'
import sharemobile from '../components/assets/sharebtn2.png'
  

const Header = () => {
  return (
    <div className="Header">
        <img className='share' title='Share' src={share} alt='share button' />
        <img className='share2' title='Share' src={sharemobile} alt=' share button' />

        <img id={'profile__img'} src={userPic} alt='profile image' />
        <p id={'twitter'}className="userName">Sammydepoj</p>
    </div>
  )
}

export default Header