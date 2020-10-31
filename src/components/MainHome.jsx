import { useEffect, useState } from 'react';
import Axios from 'axios';
import NewsList from './NewsList';
import MyCarousel from './MyCarousel';

const category = 'category=sports&';
const country = 'country=fr&';
const apiTop = 'http://newsapi.org/v2/top-headlines?';
const keyAlbin = 'apiKey=e6339d9c525446cc9b6c27d6fbd39e88';
const frURL = ` ${apiTop}${country}${category}${keyAlbin} `;

const MainHome = () => {
  const [articlesArray, setArticlesArray] = useState([]);

  useEffect(() => {
    // Send the request
    Axios.get(frURL)
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log({ data });
        setArticlesArray(data.articles);
      });
  }, []);

  return (
    <div>
      <MyCarousel articlesArray={articlesArray} />
      <NewsList articlesArray={articlesArray} />
    </div>
  );
};

export default MainHome;
