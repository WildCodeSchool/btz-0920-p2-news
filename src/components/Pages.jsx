import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey, apiUrl } from '../api';
import categorieContext from '../contexts/categorieContext';
import NewsList from './NewsList';

const Pages = () => {
  const { currentCat } = useContext(categorieContext);
  const { id } = useParams();
  const label = currentCat.filter((cat) => cat.value === id);

  const [categoryArticle, setCategoryArticle] = useState([]);

  useEffect(() => {
    Axios.get(`${apiUrl}&pageSize=10&category=${id}&apiKey=${apiKey}`).then(
      (responses) => {
        const nextState = [
          {
            category: label[0].label,
            // categoryParam: id,
            news: responses.data.articles,
          },
        ];
        // console.log(nextState);
        setCategoryArticle(nextState);
      }
    );
  }, []);

  return <NewsList articles={categoryArticle} />;
};

export default Pages;
