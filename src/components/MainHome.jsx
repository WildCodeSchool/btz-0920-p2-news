import { useEffect, useState } from 'react';
import Axios from 'axios';

import { apiUrl, apiKey } from '../api';

import MyCarousel from './MyCarousel';
import Filter from './Filter';
import NewsList from './NewsList';

const MainHome = () => {
  const [articlesArray, setArticlesArray] = useState([]);
  const [currentCat, setCurrentCat] = useState('general');

  useEffect(() => {
    // Send the request

    return (
      Axios.get(`${apiUrl}&category=${currentCat}&apiKey=${apiKey}`)
        // Extract the DATA from the received response
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response.data);
          setArticlesArray(response.data.articles);
        })
    );
  }, [currentCat]);

  return (
    <div>
      <Filter setCurrentCat={setCurrentCat} currentCat={currentCat} />
      <MyCarousel articlesArray={articlesArray} />
      <NewsList articlesArray={articlesArray} />
    </div>
  );
};

export default MainHome;
