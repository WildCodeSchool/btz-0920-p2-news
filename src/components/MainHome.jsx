import { useEffect, useState } from 'react';
import Axios from 'axios';

import { apiUrl, apiKey } from '../api';
// import MyCarousel from './MyCarousel';
import NewsList from './NewsList';
import Filter from './Filter';

const MainHome = () => {
  const [articlesArray, setArticlesArray] = useState([]);
  const [currentCat, setCurrentCat] = useState([
    { label: 'Général', value: 'general', selected: true },
    { label: 'Sport', value: 'sports', selected: true },
    { label: 'Business', value: 'business', selected: true },
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
      Axios.get(`${apiUrl}&pageSize=5&category=${cat.value}&apiKey=${apiKey}`)
    );
    // Génère un tableau d'objet contenant label et news de chaque catégorie
    const newsForSelectedCategory = [];
    Promise.all(promiseList).then((promises) =>
      promises.forEach((cat, i) => {
        newsForSelectedCategory.push({
          category: selectedCategory[i].label,
          news: cat.data.articles,
        });
        // Le tableau contenant les articles de chaque catégorie selectionnée
        // est passé au state articleArray
        setArticlesArray(newsForSelectedCategory);
        // eslint-disable-next-line no-console
        console.log(newsForSelectedCategory);
      })
    );
  }, [currentCat]);

  return (
    <div>
      <Filter setCurrentCat={setCurrentCat} currentCat={currentCat} />
      {/* <MyCarousel articlesArray={articlesArray} /> */}
      <NewsList articles={articlesArray} />
    </div>
  );
};

export default MainHome;
