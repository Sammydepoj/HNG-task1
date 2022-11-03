import React from 'react'
import I4G from '../components/assets/I4G.svg'
import footerText from '../components/assets/Footer text.svg'
import zuriLogo from '../components/assets/zurilogo.svg'

const Footer = () => {
  return (
    <div className='footer-icons'>
        <img src={zuriLogo} alt='zuri logo'/>
        <img src={footerText} alt='hng-task' />
        <img src ={I4G} alt='i4g logo' />
      </div>
  )
}

export default Footer