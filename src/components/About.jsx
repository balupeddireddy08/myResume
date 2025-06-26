import React from 'react';

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div>
        <p><strong>PROFILE :</strong></p>
        <ul>
          <li>Graduate computer science student at the University of Cincinnati</li>
          <li>Ex-Data Scientist at Tata Consultancy Services</li>
          <li>Certified Associate in Python Programming</li>
          <li>4 X Azure Cloud Certified</li>
        </ul>
        <p><strong>Let me introduce myself :</strong></p>
        <p>
          Experienced and highly proficient Data Scientist with a proven track record in leveraging machine learning, Python, 
          statistical analysis, exploratory data analysis (EDA), data preprocessing, and data visualization to drive data-driven 
          insights and solutions. Committed to optimizing data processes and enhancing business outcomes through innovative data 
          science techniques. Possessing strong analytical acumen, attention to detail, and a collaborative mindset, I excel in 
          interdisciplinary teams. My adaptability and problem-solving versatility, coupled with proactive communication skills, 
          drive my eagerness to apply my technical proficiency for meaningful contributions to the realm of Computer and Data 
          Science.
        </p>
        <p>
          <a href="/images/resume_bala_gopal_reddy.pdf" className="btn btn-primary btn-learn" target="_blank" rel="noopener noreferrer">
            Download CV <i className="icon-download4"></i>
          </a>
        </p>
      </div>
    </section>
  );
};

export default About; 