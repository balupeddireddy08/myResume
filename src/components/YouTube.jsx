import React from 'react';

const YouTube = () => {
  const videos = [
    { id: '3o4mAJhT2HY', title: 'RAG ChatBot with Llama3' },
    { id: 'TO_j16jS5w4', title: 'AI Research Assistant' },
    { id: 'xVhQr6tkDIQ', title: 'AI Agent Chatbot with Docker' },
    { id: 'irwb7emd-vo', title: 'End-to-End AI Chatbot with LangGraph' },
    { id: 'bfGAcGGRxeQ', title: 'Multi-Agent Architecture' },
    { id: '7-VMgcR1neI', title: 'AI Agents Plan and Execute' },
    { id: 'xClcLygWhvU', title: 'Automated E-commerce Data Pipeline' },
    { id: '7VRpKYuP4uI', title: 'Automated Financial Data Extraction' }
  ];

  return (
    <section>
      <h2>My YouTube Channel</h2>
      <p>
        Check out more on my channel: 
        <a href="https://www.youtube.com/@PEDDIREDDYBALAGOPALREDDY/videos" target="_blank" rel="noopener noreferrer">
          https://www.youtube.com/@PEDDIREDDYBALAGOPALREDDY/videos
        </a>
      </p>
      <div>
        {videos.map(video => (
          <div key={video.id}>
            <h4>{video.title}</h4>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouTube; 