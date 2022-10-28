import React from 'react'
import slack from '../components/assets/slack.svg'
import github from '../components/assets/Icon.svg'

const Socials = () => {
  return (
    <div className='icons'>
        <a href='sammydepoj'id='slack-icon'><img src={slack} alt='slack-icon' /></a>

        <a href='https://github.com/Sammydepoj'id='github'><img src={github} alt='github-icon'/></a>
    </div>
  )
}

export default Socials