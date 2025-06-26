import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "RAG ChatBot",
      image: "/images/img-1.png", // Placeholder image
      link: "https://github.com/balupeddireddy08/RAG_ChatBot",
      description: [
        "A Retrieval-Augmented Generation (RAG) chatbot that answers questions based on your documents.",
        "Supports multiple input types: Text, PDF, DOCX, TXT, and URLs.",
        "Leverages Google's Gemini AI for intelligent responses and uses a vector database for context."
      ]
    },
    {
      title: "GenAI Research Assistant",
      image: "/images/img-2.png", // Placeholder image
      link: "https://github.com/balupeddireddy08/GenAI-Research-Assistant",
      description: [
        "An AI-powered research assistant to streamline your research process.",
        "Features include summarization, question answering, and data extraction from research papers.",
        "Built with a focus on accuracy and ease of use for academics and researchers."
      ]
    },
    {
        title: "Build and Deploy an End-to-End AI Agent Chatbot with Docker",
        image: "/images/img-3.png", // Placeholder image
        link: "https://github.com/balupeddireddy08/Build-and-Deploy-an-End-to-End-AI-Agent-Chatbot-with-Docker",
        description: [
            "A complete guide to building and deploying an AI agent chatbot using Docker.",
            "Covers the entire lifecycle from development to containerization and deployment.",
        ]
    },
    {
        title: "End-to-End AI Chatbot with Langraph-FastAPI-and-Streamlit-UI",
        image: "/images/img-4.png", // Placeholder image
        link: "https://github.com/balupeddireddy08/End-to-End-AI-Chatbot-with-Langraph-FastAPI-and-Streamlit-UI",
        description: [
            "Demonstrates how to build an end-to-end AI chatbot using LangGraph, FastAPI, and Streamlit.",
            "Features a robust backend API and a user-friendly, interactive web interface."
        ]
    },
    {
        title: "Multi-Agent Architecture",
        image: "/images/img-5.png", // Placeholder image
        link: "https://github.com/balupeddireddy08/Multi-Agent_Architecture",
        description: [
            "An exploration of multi-agent architectures for solving complex problems.",
            "Includes examples of collaborative and autonomous agents working together."
        ]
    },
    {
        title: "AI-Agents Plan and Execute",
        image: "/images/img-6.png", // Placeholder image
        link: "https://github.com/balupeddireddy08/AI-Agents_Plan_and_Execute",
        description: [
            "A project showcasing AI agents that can plan and execute tasks.",
            "Focuses on the planning and execution cycle of autonomous AI agents."
        ]
    }
  ];

  return (
    <section>
      <h2>Personal Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <img src={project.image} alt={project.title} style={{width: "400px", height: "300px"}} />
            <div>
              <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
              <ul>
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 