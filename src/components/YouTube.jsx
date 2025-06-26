import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlay, FaExternalLinkAlt } from 'react-icons/fa';

const videos = [
  {
    id: "3o4mAJhT2HY",
    title: "RAG ChatBot with Llama3",
    thumbnail: "https://img.youtube.com/vi/3o4mAJhT2HY/maxresdefault.jpg",
    url: "https://youtu.be/3o4mAJhT2HY?si=metb_eEHu78pcBbG"
  },
  {
    id: "TO_j16jS5w4",
    title: "AI Research Assistant",
    thumbnail: "https://img.youtube.com/vi/TO_j16jS5w4/maxresdefault.jpg",
    url: "https://youtu.be/TO_j16jS5w4?si=GKVUz7zFklHqXYjI"
  },
  {
    id: "LawpImJpMYU",
    title: "LLM Chatbot with Memory",
    thumbnail: "https://img.youtube.com/vi/LawpImJpMYU/maxresdefault.jpg",
    url: "https://youtu.be/LawpImJpMYU?si=JhryaaxC0jfT17pG"
  },
  {
    id: "xVhQr6tkDIQ",
    title: "AI Agent Chatbot with Docker",
    thumbnail: "https://img.youtube.com/vi/xVhQr6tkDIQ/maxresdefault.jpg",
    url: "https://youtu.be/xVhQr6tkDIQ?si=C92ULCqMjepmm8Go"
  },
  {
    id: "irwb7emd-vo",
    title: "End-to-End AI Chatbot with LangGraph",
    thumbnail: "https://img.youtube.com/vi/irwb7emd-vo/maxresdefault.jpg",
    url: "https://youtu.be/irwb7emd-vo?si=WlX0HGxpjjvMOonn"
  },
  {
    id: "bfGAcGGRxeQ",
    title: "Multi-Agent Architecture",
    thumbnail: "https://img.youtube.com/vi/bfGAcGGRxeQ/maxresdefault.jpg",
    url: "https://youtu.be/bfGAcGGRxeQ?si=7qY-PbsXd14ne5EU"
  },
  {
    id: "2iyVyHGdM4I",
    title: "AI Agents Plan and Execute",
    thumbnail: "https://img.youtube.com/vi/2iyVyHGdM4I/maxresdefault.jpg",
    url: "https://youtu.be/2iyVyHGdM4I?si=cIzeSqnotCO6IHHw"
  }
];

const YouTube = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="youtube" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-600 dark:text-red-500">
            YouTube Videos
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Educational content and tutorials on data science, AI, and programming.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-colors duration-300"
              variants={item}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 rounded-full p-4">
                      <FaPlay className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 rounded-full p-2">
                    <FaYoutube className="text-white text-xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white transition-colors duration-300">{video.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Click to watch on YouTube</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <motion.a
            href="https://www.youtube.com/@PEDDIREDDYBALAGOPALREDDY/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaYoutube className="mr-2" size={20} />
            Explore More Videos
            <FaExternalLinkAlt className="ml-2" size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default YouTube; 