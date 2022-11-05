import React from 'react'
import Footer from '../components/Footer'
import contactstyle from './styles/contact.css'

const myName ="Sammydepoj"


const contact = () => {
  return (
    <div className='contactPage'>
      <div className='contact-form'>
        <h1 className='contactHeading'>Contact Me</h1>
        <p className='contactHeadingDetails'>Hi there, contact me to ask me about anything you have in mind.</p>
        <form>
            <div className="first_and_lastname">
                <div className='labelInput'>
                  <label htmlFor="firstName">First name</label>
                  <input
                    required
                    type="text"
                    id="first_name"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className='labelInput'>
                  <label htmlFor="lastName">Last name</label>
                  <input
                    required
                    type="text"
                    id="last_name"
                    placeholder="Enter your last name"
                  />
                </div>
          </div>

          <div className='labelInput'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="yourname@email.com" />
          </div>

          <div className='labelInput'>
            <label htmlFor="message">Message</label>
            <textarea
              required
              name=""
              id="message"
              rows={4}
              
              placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
          </div>


          <div className="checkBoxLabel">
            <input className="" type="checkbox" required/>
            <label className="" htmlFor="userAgreement">
              You agree to providing your data to {myName}, who may
              contact you.
            </label>
          </div>
          <button className="submitButton" type='submit' id="btn__submit">
            Send message
          </button>
        </form> 
        <Footer/> 
    </div>  
  </div>
  
  )
}

export default contact