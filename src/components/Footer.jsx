import React from 'react';

const Footer = () => {
  const socialLinks = {
    github: 'https://github.com/balupeddireddy08',
    linkedin: 'https://www.linkedin.com/in/bala-gopal-reddy-peddireddy/',
    medium: 'https://medium.com/@balupeddireddy08',
    youtube: 'https://www.youtube.com/@PEDDIREDDYBALAGOPALREDDY/videos'
  };

  return (
    <footer>
      <div className="social-links">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={socialLinks.medium} target="_blank" rel="noopener noreferrer">Medium</a>
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Peddireddy Bala Gopal Reddy. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 