import React, { useState } from 'react';
import { validateEmail } from '../utils/validator';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default submit behaviour
        if (!errorMessage) {
          console.log('Submit Form', formState); // If no error, then just print the inputs to the console
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value); // validate email input
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`); // validate other text inputs 
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value }); // if there is no error, then update state
        }
    };

    return (
        <section className="content-font container">
            <div>
                <h1>Contact</h1>
            </div>
            <form id="contact-form" onSubmit={handleSubmit} className="mt-4">
                <div className="form-group">
                    <div>
                        <label htmlFor="name">Name:</label>
                    </div>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <div>
                    <label htmlFor="email">Email address:</label>
                    </div>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <div>
                    <label htmlFor="message">Message:</label>
                    </div>
                    <textarea name="message" rows="6" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
            <div className="mt-2">
                <p>Feel free to contact me for any queries (Email: samiulhaydereee@gmail.com, Cell: +1 403 465 3064) </p>
            </div>
        </section>
    );
}

export default ContactForm;
