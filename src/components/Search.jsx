import { useState, useEffect } from 'react';
import Axios from 'axios';
import { apiUrl, apiKey } from '../api';
// import NewsList from './NewsList';

const Search = () => {
  const [keyWord, setKeyWord] = useState('');
  const [keyArticles, setKeyArticles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(keyWord);
  };

  useEffect(() => {
    Axios.get(`${apiUrl}&q=${keyWord}&apiKey=${apiKey}`).then((res) => {
      const nextState = {
        category: 'trump',
        categoryParam: 'trump',
        news: res.data.articles,
      };
      // eslint-disable-next-line no-console
      console.log(nextState);
      setKeyArticles(nextState);
    });
  }, [keyWord]);

  // eslint-disable-next-line no-console
  console.log(keyArticles);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyWord">
          <input
            type="text"
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            placeholder="Ex: COVID-19"
          />
          <button type="submit">Rechercher</button>
        </label>
      </form>
      {/* <NewsList articles={keyArticles} /> */}
    </>
  );
};

export default Search;
