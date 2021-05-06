import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    if (e.target.name ==='email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is not valid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Error: ${e.target.name} is required.`);
        console.log('errorMessage', errorMessage);
      } else {
        setErrorMessage('');
      }
    }


    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
  }

  return (
    <section>
      <h1>reach out;;</h1>
      <div className="content">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={name} onChange={handleChange} name="name" />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" onChange={handleChange} name="email" defaultValue={email} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea type="message" onChange={handleChange} name="message" defaultValue={message} rows="5" />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text ">{errorMessage}</p>
            </div>
          )}
          <button type="submit" data-testid="submit" className="btn btn-secondary btn-lg">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;