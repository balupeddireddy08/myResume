import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import profilePic from '../media/images/my_pic.png';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Data Enthusiast with practical experience in Artificial Intelligence, Data Science, Machine Learning, Deep Learning, Natural Language Processing, and 
            Computer Vision. Proficient in mathematics, time series forecasting, clustering, and developing GenAI use cases to address complex business challenges.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-teal-400 dark:border-teal-500 shadow-xl">
            <img 
              src={profilePic} 
              alt="P.B.G.R." 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transition-colors duration-300"
          >
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-3xl text-teal-400 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">Experience</h3>
            </div>
            
            <div className="space-y-8">
              <div className="border-l-2 border-teal-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">Data Scientist Intern</h4>
                <p className="text-teal-400">BMW Financial Services NA, LLC</p>
                <p className="text-gray-500 dark:text-gray-500 transition-colors duration-300">September 2024 - May 2025</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1 transition-colors duration-300">
                  <li>Employed adaptive Retrieval-Augmented Generation (RAG) on AWS Cloud for the GenAI Titles use case, achieving 95% model accuracy.</li>
                  <li>Pioneered three GenAI use cases on BMW's AI Platform as the first adopter.</li>
                  <li>Worked on AI Agentic Orchestration, utilizing tools to integrate multiple IT applications.</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-teal-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">Data Scientist</h4>
                <p className="text-teal-400">Tata Consultancy Services Ltd</p>
                <p className="text-gray-500 dark:text-gray-500 transition-colors duration-300">October 2021 - September 2023</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1 transition-colors duration-300">
                  <li>Developed an end-to-end machine learning pipeline utilizing advanced deep learning and time-series analysis.</li>
                  <li>Built a predictive forecasting model leveraging Auto_Arima, TimeGPT, and Temporal Fusion Transformers.</li>
                  <li>Achieved over 85% accuracy in particle size analysis for cone crushers using a novel computer vision system.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transition-colors duration-300"
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-3xl text-emerald-400 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">Education</h3>
            </div>
            
            <div className="space-y-8">
              <div className="border-l-2 border-emerald-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">Master of Engineering in Computer Science</h4>
                <p className="text-emerald-400">University of Cincinnati</p>
                <p className="text-gray-500 dark:text-gray-500 transition-colors duration-300">August 2023 - May 2025</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">CGPA: 3.62</p>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Coursework: Cloud Computing, Advanced Machine Learning, Artificial Intelligence, Deep Learning</p>
              </div>
              
              <div className="border-l-2 border-emerald-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">BTech in Electronics and Communication Engineering</h4>
                <p className="text-emerald-400">VNR Vignana Jyothi Institute of Technology</p>
                <p className="text-gray-500 dark:text-gray-500 transition-colors duration-300">August 2017 - May 2021</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">CGPA: 3.64</p>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Coursework: Artificial Neural Networks and Fuzzy Logic, Data Structures, DBMS, Web Development</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-12">
          <motion.a
            href="/src/media/resume_bala_gopal_reddy_AI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-full"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(20, 184, 166, 0.6)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaDownload className="mr-2" /> Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About; 