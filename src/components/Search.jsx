import { Button, Form, Input } from 'reactstrap';
import { useState } from 'react';
import Axios from 'axios';
import { apiUrl, apiKey } from '../api';
import NewsList from './NewsList';

const Search = () => {
  const [keyWord, setKeyWord] = useState('');
  const [keyArticles, setKeyArticles] = useState([]);

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(`${apiUrl}&q=${keyWord}&apiKey=${apiKey}`).then((res) => {
      const nextState = [
        {
          category: '',
          // categoryParam: '',
          news: res.data.articles,
        },
      ];
      setKeyArticles(nextState);
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          style={{
            marginBottom: '20px',
            width: '50%',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
          type="text"
          value={keyWord}
          onChange={(event) => handleChange(event)}
          placeholder="Ex: COVID-19"
        />
        <Button type="submit">Rechercher</Button>
      </Form>
      <NewsList articles={keyArticles} />
    </>
  );
};

export default Search;
