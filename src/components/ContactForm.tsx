import React, { useState } from 'react';


const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('General');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, topic, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setTopic('General');
        setMessage('');
      } else {
        setError('Failed to submit the form. Please try again later.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Contact Form on the Left */}
      <div className="contact-form-container" style={{ flex: 1 }}>
        <h2>Contact Us</h2>
        {submitted ? (
          <p>Thank you for your message! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="topic">Topic:</label>
              <select
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="General">General</option>
                <option value="Support">Support</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>

      {/* Image on the Right */}
      <div style={{ flex: 0.5, display: 'flex', justifyContent: 'flex-end', padding: '30px' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Los_Angeles_City_Hall_2013_%28cropped%29.jpg"
          alt="Los Angeles City Hall"
          style={{ width: '600px', height: 'auto', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
};

export default ContactForm;
