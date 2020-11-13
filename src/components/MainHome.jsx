import { useEffect, useState } from 'react';
import Axios from 'axios';

import { apiUrl, apiKey } from '../api';
import MyCarousel from './MyCarousel';
import NewsList from './NewsList';
import Filter from './Filter';

const MainHome = () => {
  const [articlesArray, setArticlesArray] = useState([]);
  const [currentCat, setCurrentCat] = useState([
    { label: 'Général', value: 'general', selected: true },
    { label: 'Sport', value: 'sports', selected: true },
    { label: 'Business', value: 'business', selected: false },
    { label: 'Science', value: 'science', selected: false },
    { label: 'Santé', value: 'health', selected: false },
    { label: 'Technologies', value: 'technology', selected: false },
    { label: 'Divertissement', value: 'entertainment', selected: false },
  ]);

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
          categoryParam: selectedCategory[i].value,
          news: cat.data.articles,
        };
      });
      setArticlesArray(nextState);
    });
  }, [currentCat]);

  return (
    <div>
      <div className="article">
        <Filter setCurrentCat={setCurrentCat} currentCat={currentCat} />
        <MyCarousel articlesArray={articlesArray} />
      </div>
      <NewsList articles={articlesArray} />
    </div>
  );
};

export default MainHome;
