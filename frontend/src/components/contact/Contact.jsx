import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
