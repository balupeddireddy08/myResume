import React from 'react';

const Articles = () => {
  const articles = [
    {
      title: "A Short Journey To Deep Learning",
      image: "/images/a-short-journey-to-deep-learning.png",
      description: "Understanding Artificial Neural Network (ANN) With An Example…🫀",
      link: "https://pub.towardsai.net/a-short-journey-to-deep-learning-396ddf02f57f"
    },
    {
      title: "Forecast The Future With Time Series Analysis",
      image: "/images/Forecast_The_Future_With_Time_Series_Analysis.png",
      description: "A detailed explanation of univariate time series analysis with an example…✈",
      link: "https://pub.towardsai.net/forecast-the-future-with-time-series-analysis-e7793368d879"
    },
    {
      title: "How to Run a Flask Application Locally",
      image: "/images/Create_a_Virtual_Environment.png",
      description: "Easily create a virtual world for your projects",
      link: "https://pub.towardsai.net/how-to-run-a-flask-application-locally-by-using-a-virtual-environment-in-windows-os-509540e0e3dd"
    },
    {
      title: "How to Deploy a Static Website Using Github",
      image: "/images/Deploy_a_Static_Website_using_Github.png",
      description: "Make your website and share it publicly in no time.",
      link: "https://pub.towardsai.net/how-to-deploy-a-static-website-using-github-58c9df22127"
    }
  ];

  return (
    <section>
      <h2>Articles</h2>
      <div>
        {articles.map((article, index) => (
          <div key={index} style={{ backgroundImage: `url(${article.image})` }}>
            <div>
              <div>
                <h3><a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
                <span>{article.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles; 