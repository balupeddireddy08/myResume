import React from 'react';
import { motion } from 'framer-motion';
import { FaMedium, FaExternalLinkAlt } from 'react-icons/fa';

const articles = [
  {
    title: "Building a RAG Chatbot with LangChain, Streamlit, and Gemini",
    description: "A comprehensive guide to building a Retrieval-Augmented Generation chatbot that answers questions based on your documents.",
    date: "April 2024",
    link: "https://medium.com/@balupeddireddy08/building-a-rag-chatbot-with-langchain-streamlit-and-gemini-8c9e5d7a2e7d"
  },
  {
    title: "Building a GenAI Research Assistant with LangGraph",
    description: "Learn how to create an AI-powered research assistant that streamlines the research process using LangGraph and multi-agent architecture.",
    date: "March 2024",
    link: "https://medium.com/@balupeddireddy08/building-a-genai-research-assistant-with-langgraph-a-step-by-step-guide-d5f4d24b4e5c"
  },
  {
    title: "End-to-End AI Chatbot with LangGraph, FastAPI, and Streamlit",
    description: "A step-by-step guide to building an end-to-end AI chatbot using LangGraph for orchestration, FastAPI for the backend, and Streamlit for the UI.",
    date: "February 2024",
    link: "https://medium.com/@balupeddireddy08/end-to-end-ai-chatbot-with-langgraph-fastapi-and-streamlit-ui-a-step-by-step-guide-a1bfb56d0e57"
  },
  {
    title: "Building and Deploying an AI Agent Chatbot with Docker",
    description: "A comprehensive guide to building and deploying an end-to-end AI agent chatbot using Docker, with optimized PostgreSQL query management.",
    date: "January 2024",
    link: "https://medium.com/@balupeddireddy08/build-and-deploy-an-end-to-end-ai-agent-chatbot-with-docker-a-comprehensive-guide-9a1bfb56d0e57"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
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
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 h-full transition-colors duration-300"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
                }}
              >
                <div className="flex items-center mb-4">
                  <FaMedium className="text-gray-700 dark:text-gray-300 text-2xl mr-3 transition-colors duration-300" />
                  <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white transition-colors duration-300">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">{article.description}</p>
                <div className="flex items-center text-teal-600 dark:text-teal-400 transition-colors duration-300">
                  <span>Read article</span>
                  <FaExternalLinkAlt className="ml-2 text-sm" />
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