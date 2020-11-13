import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MyProfile from './pages/MyProfile';
import Layout from './Layout';
import Categories from './pages/Categories';
import Article from './pages/Article';
import MainHome from './MainHome';
import articleContext from '../contexts/articleContext';

const Router = () => {
  const [articleCategory, setArticleCategory] = useState('');
  const [articleUrl, setArticleUrl] = useState('');
  return (
    <BrowserRouter>
      <articleContext.Provider
        value={{
          articleCategory,
          setArticleCategory,
          articleUrl,
          setArticleUrl,
        }}
      >
        <Layout>
          <Switch>
            <Route exact path="/" component={MainHome} />
            <Route path="/my-profile" component={MyProfile} />
            <Route path="/categories" component={Categories} />
            <Route path="/article" component={Article} />
          </Switch>
        </Layout>
      </articleContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
