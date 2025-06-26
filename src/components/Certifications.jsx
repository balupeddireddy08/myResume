import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';
import pcapCert from '../media/certificates/PCAP.png';
import ai900Cert from '../media/certificates/AI_900.png';
import dp900Cert from '../media/certificates/DP_900.png';
import az900Cert from '../media/certificates/AZ_900.png';
import tableauCert from '../media/certificates/Tableau.png';
import pythonTsaCert from '../media/certificates/Python_TSA.png';
import sqlCert from '../media/certificates/SQL_Bootcamp.png';
import htmlCert from '../media/certificates/HTML_Javascript_Bootstrap.png';

const certifications = [
  {
    title: "PCAP: Certified Associate in Python Programming",
    organization: "Python Institute",
    image: pcapCert,
    link: "https://verify.openedg.org/?id=pyOA.vwau.F2Gi"
  },
  {
    title: "Azure AI Fundamentals (AI-900)",
    organization: "Microsoft",
    image: ai900Cert,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/balapeddireddy-5867/50A7DBFDEA3917EF?sharingId=427619C5C86B435A"
  },
  {
    title: "Azure Data Fundamentals (DP-900)",
    organization: "Microsoft",
    image: dp900Cert,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/balapeddireddy-5867/E90F7DEF4E6AA9EC?sharingId=427619C5C86B435A"
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    organization: "Microsoft",
    image: az900Cert,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/balapeddireddy-5867/9F1D6A9216671D4E?sharingId=427619C5C86B435A"
  },
  {
    title: "Tableau Desktop Certified Associate",
    organization: "Edureka",
    image: tableauCert,
    link: "https://www.edureka.co/certificates/mycertificate/c6ab957afcfe1669735f61f55563f49b"
  },
  {
    title: "Python for Time Series Data Analysis",
    organization: "Udemy",
    image: pythonTsaCert,
    link: "#"
  },
  {
    title: "Complete SQL Bootcamp: Zero to Hero",
    organization: "Udemy",
    image: sqlCert,
    link: "#"
  },
  {
    title: "HTML, JavaScript, & Bootstrap",
    organization: "Udemy",
    image: htmlCert,
    link: "#"
  }
];

const Certifications = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-teal-600 dark:text-teal-400">
            Professional Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Industry-recognized credentials that validate my expertise in data science, AI, and cloud technologies.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl"
              variants={item}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4 bg-teal-500 rounded-full p-2">
                  <FaCertificate className="text-white text-xl" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.organization}</p>
                <motion.a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaExternalLinkAlt className="mr-2" /> View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="https://www.linkedin.com/in/bala-gopal-reddy-peddireddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="mr-2" size={20} />
            Explore More Certifications
            <FaExternalLinkAlt className="ml-2" size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 