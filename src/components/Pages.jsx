import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey, apiUrl } from '../api';
import NewsList from './NewsList';

const Pages = () => {
  const { id } = useParams();

  const [categoryArticle, setCategoryArticle] = useState([]);

  useEffect(() => {
    Axios.get(`${apiUrl}&pageSize=10&category=${id}&apiKey=${apiKey}`).then(
      (responses) => {
        const nextState = [
          {
            category: id,
            // categoryParam: id,
            news: responses.data.articles,
          },
        ];
        // console.log(nextState);
        setCategoryArticle(nextState);
      }
    );
  }, []);
  // eslint-disable-next-line no-console
  console.log(categoryArticle);
  return <NewsList articles={categoryArticle} />;
};

export default Pages;
