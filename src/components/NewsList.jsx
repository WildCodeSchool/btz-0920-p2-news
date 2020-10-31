import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './MainHome.css';

// Ce composant crée une liste de News provenant de l'API
function NewsList() {
  const [articlesArray, setArticlesArray] = useState([]);

  useEffect(() => {
    const country = 'country=fr&';
    const category = 'category=sports&';
    const apiTop = 'http://newsapi.org/v2/top-headlines?';
    const keyAlbin = 'apiKey=e6339d9c525446cc9b6c27d6fbd39e88';
    const frURL = ` ${apiTop}${country}${category}${keyAlbin} `;
    // Send the request
    axios
      .get(frURL)
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log({ data });
        setArticlesArray(data);
      });
  });

  return (
    <div className="newslist">
      {articlesArray.map((article) => {
        return (
          <Card
            image={article.urlToImage}
            title={article.title}
            url={article.url}
            date={article.publishedAt}
            source={article.source.name}
            description={article.description}
            key={article.title}
          />
        );
      })}
    </div>
  );
}

export default NewsList;
