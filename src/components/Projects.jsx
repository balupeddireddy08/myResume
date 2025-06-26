import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ragChatbotImg from '../media/projects/RAG_chatbot.png';
import researchAssistantImg from '../media/projects/research_assistant.png';
import dockerChatbotImg from '../media/projects/AI Agent with docker.png';
import langGraphChatbotImg from '../media/projects/LangGraph_chatbot_Agent.png';
import multiAgentImg from '../media/projects/multi_agent.png';

const projects = [
  {
    title: "RAG ChatBot",
    description: "A Retrieval-Augmented Generation chatbot that answers questions based on your documents, featuring multiple input types and Google Gemini integration.",
    image: ragChatbotImg,
    github: "https://github.com/balupeddireddy08/RAG_ChatBot"
  },
  {
    title: "GenAI Research Assistant",
    description: "An AI-powered research assistant that streamlines the research process using LangGraph, Pydantic, RAG, and FAISS with multi-agent architecture.",
    image: researchAssistantImg,
    github: "https://github.com/balupeddireddy08/GenAI-Research-Assistant"
  },
  {
    title: "AI Agent Chatbot with Docker",
    description: "A complete guide to building and deploying an end-to-end AI agent chatbot using Docker, with optimized PostgreSQL query management.",
    image: dockerChatbotImg,
    github: "https://github.com/balupeddireddy08/Build-and-Deploy-an-End-to-End-AI-Agent-Chatbot-with-Docker"
  },
  {
    title: "AI Chatbot with LangGraph & FastAPI",
    description: "An end-to-end AI chatbot using LangGraph, FastAPI, and a Streamlit UI, featuring chunking, embedding, and similarity search pipeline.",
    image: langGraphChatbotImg,
    github: "https://github.com/balupeddireddy08/End-to-End-AI-Chatbot-with-Langraph-FastAPI-and-Streamlit-UI"
  },
  {
    title: "Multi-Agent Architecture",
    description: "An exploration of multi-agent architectures for solving complex problems with researcher, supervisor, prompt enhancer, and validator nodes.",
    image: multiAgentImg,
    github: "https://github.com/balupeddireddy08/Multi-Agent_Architecture"
  }
];

const Projects = () => {
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            A showcase of my recent work in AI, machine learning, and data science applications.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-colors duration-300"
              variants={item}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">{project.description}</p>
                
                <div className="flex">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="https://github.com/balupeddireddy08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-2" size={20} />
            Explore More Projects
            <FaExternalLinkAlt className="ml-2" size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 