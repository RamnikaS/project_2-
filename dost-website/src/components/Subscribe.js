import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="subscribe">
      <h3>Subscribe & Get Updates</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {isSubscribed && <p>Thank you for subscribing!</p>}
    </section>
  );
};

export default Subscribe;

