import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    // For now, we'll just log it to the console.
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section>
      <h2>Contact</h2>
      <p>
        Feel free to reach out to me via email or connect with me on LinkedIn.
      </p>
      <p>
        <strong>Email:</strong> balagopalreddypeddireddy@gmail.com
      </p>
      <p>
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bala-gopal-reddy-peddireddy/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/bala-gopal-reddy-peddireddy/</a>
      </p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact; 