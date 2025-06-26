import React from 'react';

const Skills = () => {
  const skills = {
    Languages: "Python, C Language, C++, Java, SQL",
    Libraries: "Numpy, Pandas, SciPy, Seaborn, Plotly, Matplotlib, Statsmodels, NL \u200BToolkit, PySpark",
    Frameworks: "TensorFlow, PyTorch, Keras, Scikit-learn, Hugging Face, LangChain, Transformers, Apache MXNet, FAISS, OpenAI, PySpark",
    Database: "MySQL, MongoDB, NoSQL, Oracle, SQLite",
    "IDE & Tools": "Jupyter Notebook, Visual Studio Code, GitHub, Docker, Data Version Control, DataRobot, Pycharm, Git, Matlab, Tableau, Power BI",
    "Cloud Platform": "Azure (AutoML, Functions, Containers, Virtual Machines, Blob), AWS (S3, EC2, Lambda)",
    "Web Developement": "CSS 3, HTML 5, Bootstrap",
    Technologies: "Data Science, Statistics, Machine Learning, Time Series Analysis, Deep Learning, Natural Language processing"
  };

  return (
    <section>
      <h2>TECHNICAL QUALIFICATIONS</h2>
      {Object.entries(skills).map(([category, details]) => (
        <div key={category}>
          <h3><strong>{category}</strong>: {details}</h3>
        </div>
      ))}
    </section>
  );
};

export default Skills;