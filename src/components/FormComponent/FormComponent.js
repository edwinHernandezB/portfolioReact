import React from 'react'
import "./FormComponent.css";
export const FormComponent = () => {
  return (
    <div>
        <form className="contact-form">
          <input type="text" id="name" name="name" placeholder="Name" required />
            <input type="email" id="email" name="email" placeholder="Email" required />
            <textarea id="message" name="message" placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="primary-button">Send Message</button>
        </form>
    </div>
  )
}
