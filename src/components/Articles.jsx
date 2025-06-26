import React from 'react';
import { motion } from 'framer-motion';
import { FaMedium, FaExternalLinkAlt } from 'react-icons/fa';

// Import images
import deepLearningImg from '../media/articles/Deep_Learning.png';
import timeSeriesImg from '../media/articles/time_series.png';
import venvFlaskImg from '../media/articles/venv_flask.png';
import githubImg from '../media/articles/github.png';

const articles = [
  {
    title: "A Short Journey To Deep Learning",
    description: "Understanding Artificial Neural Network (ANN) With An Example…🫀",
    link: "https://pub.towardsai.net/a-short-journey-to-deep-learning-396ddf02f57f",
    image: deepLearningImg
  },
  {
    title: "Forecast The Future With Time Series Analysis",
    description: "A detailed explanation of univariate time series analysis with an example…✈",
    link: "https://pub.towardsai.net/forecast-the-future-with-time-series-analysis-e7793368d879",
    image: timeSeriesImg
  },
  {
    title: "Create a Virtual Environment in Windows OS and Run a Flask Application Locally",
    description: "Easily create a virtual world for your projects",
    link: "https://pub.towardsai.net/how-to-run-a-flask-application-locally-by-using-a-virtual-environment-in-windows-os-509540e0e3dd",
    image: venvFlaskImg
  },
  {
    title: "Deploy a Static Website using Github",
    description: "Make your website and share it publicly in no time.",
    link: "https://pub.towardsai.net/how-to-deploy-a-static-website-using-github-58c9df22127",
    image: githubImg
  }
];

const Articles = () => {
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
    <section id="articles" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-teal-600 dark:text-teal-400">
            Technical Articles
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            I share my knowledge and insights on AI, machine learning, and data science through detailed technical articles.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              variants={item}
            >
              <motion.div 
                className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden h-full transition-colors duration-300"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
                }}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FaMedium className="text-gray-700 dark:text-gray-300 text-2xl mr-3 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white transition-colors duration-300">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">{article.description}</p>
                  <div className="flex items-center text-teal-600 dark:text-teal-400 transition-colors duration-300">
                    <span>Read article</span>
                    <FaExternalLinkAlt className="ml-2 text-sm" />
                  </div>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="https://medium.com/@balupeddireddy08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMedium className="mr-2" size={20} />
            Explore More Articles
            <FaExternalLinkAlt className="ml-2" size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Articles; 