import { useContext, useEffect, useState } from 'react';
import Axios from 'axios';

import { apiUrl, apiKey } from '../api';
import MyCarousel from './MyCarousel';
import NewsList from './NewsList';
import Filter from './Filter';
import categorieContext from '../contexts/categorieContext';

const MainHome = () => {
  const [articlesArray, setArticlesArray] = useState([]);
  const { currentCat, setCurrentCat } = useContext(categorieContext);

  useEffect(() => {
    // Garde uniquement les catégories selectionnées
    const selectedCategory = currentCat.filter((cat) => cat.selected);
    // Génère les requêtes API pour chaque catégorie selectionnée
    const promiseList = selectedCategory.map((cat) =>
      Axios.get(`${apiUrl}&pageSize=10&category=${cat.value}&apiKey=${apiKey}`)
    );
    // Génère un tableau d'objet contenant label et news de chaque catégorie

    Promise.all(promiseList).then((responses) => {
      const nextState = responses.map((cat, i) => {
        return {
          category: selectedCategory[i].label,
          news: cat.data.articles,
        };
      });
      setArticlesArray(nextState);
    });
  }, [currentCat]);

  return (
    <div>
      <div className="filter-carrousel">
        <Filter setCurrentCat={setCurrentCat} currentCat={currentCat} />
        <MyCarousel articlesArray={articlesArray} />
      </div>
      <NewsList articles={articlesArray} />
    </div>
  );
};

export default MainHome;
