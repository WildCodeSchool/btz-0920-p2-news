import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Pages from './Pages';
import MyProfile from './pages/MyProfile';
import Layout from './Layout';
import Categories from './pages/Categories';
import MainHome from './MainHome';
import categorieContext from '../contexts/categorieContext';
import Article from './pages/Article';

function Router() {
  const [currentCat, setCurrentCat] = useState([
    { label: 'Général', value: 'general', selected: true },
    { label: 'Sport', value: 'sports', selected: false },
    { label: 'Business', value: 'business', selected: false },
    { label: 'Science', value: 'science', selected: false },
    { label: 'Santé', value: 'health', selected: false },
    { label: 'Technologies', value: 'technology', selected: false },
    { label: 'Divertissement', value: 'entertainment', selected: false },
  ]);
  const [articleCategory, setArticleCategory] = useState('');
  const [articleUrl, setArticleUrl] = useState('');

  return (
    <BrowserRouter>
      <categorieContext.Provider
        value={{
          currentCat,
          setCurrentCat,
          articleCategory,
          setArticleCategory,
          articleUrl,
          setArticleUrl,
        }}
      >
        <Layout>
          <Switch>
            <Route exact path="/" component={MainHome} />
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/categories/:id" component={Pages} />
            <Route path="/categories" component={Categories} />
            <Route path="/article" component={Article} />
          </Switch>
        </Layout>
      </categorieContext.Provider>
    </BrowserRouter>
  );
}

export default Router;
