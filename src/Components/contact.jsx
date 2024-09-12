import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Here’s how you can reach us:</p>

      <div style={{ marginBottom: '20px' }}>
        <h2>Address</h2>
        <p>123 Easy Street, Shopville, SP 45678</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Phone</h2>
        <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Email</h2>
        <p><a href="mailto:contact@easyshop.com">contact@easyshop.com</a></p>
      </div>

      <div>
        <h2>Social Media</h2>
        <p>
          <a href="https://facebook.com/easyshop" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://twitter.com/easyshop" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://instagram.com/easyshop" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
