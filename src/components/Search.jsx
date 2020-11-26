import { useState } from 'react';

const Search = () => {
  const [keyWord, setKeyWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
    </>
  );
};

export default Search;
