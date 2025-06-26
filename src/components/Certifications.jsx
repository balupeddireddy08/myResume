import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "PCAP: Certified Associate in Python Programming Certification",
      image: "/images/PCAP.png",
      description: "- Course offered by Python Institute.",
      link: "https://verify.openedg.org/?id=pyOA.vwau.F2Gi"
    },
    {
      title: "Machine Learning",
      image: "/images/img-2.png",
      description: "an online non-credit course authorized by Stanford University and offered through Coursera.",
      link: "#a"
    },
    {
      title: "Tableau Desktop Certified Associate",
      image: "/images/Tableau_Desktop_Certified_Associate.png",
      description: "Course offered by Edureka.",
      link: "https://www.edureka.co/certificates/mycertificate/c6ab957afcfe1669735f61f55563f49b"
    },
    {
      title: "Programming, Datastructures and Algorithms Using Python",
      image: "/images/img-3.png",
      description: "offered by National Programme on Technology Enhanced Learning (NPTEL).",
      link: "#a"
    },
    {
      title: "Azure Fundamentals Certification (AZ-900)",
      image: "/images/AZ-900.png",
      description: "Course offered by Microsoft.",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/balapeddireddy-5867/9F1D6A9216671D4E?sharingId=427619C5C86B435A"
    },
    {
      title: "Python for Time Series Data Analysis",
      image: "/images/Python_TSA.png",
      description: "Course offered by Udemy.",
      link: "#a"
    },
    {
      title: "Azure Data Fundamentals Certification (DP-900)",
      image: "/images/DP-900.png",
      description: "Course offered by Microsoft.",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/balapeddireddy-5867/E90F7DEF4E6AA9EC?sharingId=427619C5C86B435A"
    },
    {
      title: "The Complete SQL Bootcamp: Go from Zero to Hero",
      image: "/images/sql.png",
      description: "Course offered by Udemy.",
      link: "#a"
    },
    {
      title: "Azure AI Fundamentals Certification (AI-900)",
      image: "/images/AI-900.png",
      description: "Course offered by Microsoft.",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/balapeddireddy-5867/50A7DBFDEA3917EF?sharingId=427619C5C86B435A"
    },
    {
      title: "HTML, JavaScript, & Bootstrap Certification",
      image: "/images/img-6.png",
      description: "offered by Udemy.",
      link: "#a"
    }
  ];

  return (
    <section>
      <h2>Certifications</h2>
      <div>
        {certifications.map((cert, index) => (
          <div key={index} style={{ backgroundImage: `url(${cert.image})` }}>
            <div>
              <div>
                <h3><a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.title}</a></h3>
                <span>{cert.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications; 