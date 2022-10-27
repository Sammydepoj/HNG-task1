import React from 'react'
import slack from '../components/assets/slack.svg'
import github from '../components/assets/Icon.svg'

const Socials = () => {
  return (
    <div className='icons'>
        <a href=''id='slack'><img src={slack} /></a>

        <a href=''id='github'><img src={github} /></a>
    </div>
  )
}

export default Socials