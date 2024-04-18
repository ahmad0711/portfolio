import React from 'react'
import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Conatct Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          <article className="contact__option">
            <MdMarkEmailRead className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ahmadalich13@gmail.com</h5>
            <a href="mailto:ahmadalich13@gmail.com">Send A Messege</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+923215019936</h5>
            <a href="https://api.whatsapp.com/send?phone+923215019936">Send A Messege</a>
          </article>

            {/* <form action="">
              <input type="text" name='name' placeholder='Your Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="message" rows="10" placeholder='Drop your message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form> */}
        </div>
      </div>
    </section>
  )
}

export default Contact