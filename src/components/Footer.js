import React from 'react'
import I4G from '../components/assets/I4G.svg'
import footerText from '../components/assets/Footer text.svg'
import zuriLogo from '../components/assets/zurilogo.svg'

const Footer = () => {
  return (
    <div className='footer-icons'>
        <img src={zuriLogo} />
        <img src={footerText} />
        <img src ={I4G} />

    </div>
  )
}

export default Footer