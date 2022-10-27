import React from 'react'

const Button = ({text,page,identity}) => {
  return (
    <div className = 'link-container'>
        <a className='links' href={page} id={identity}>{text}</a>
    </div>
  )
}

export default Button