import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sport from './Sport';
import MyProfile from './pages/MyProfile';
import Layout from './Layout';
import Categories from './pages/Categories';
import MainHome from './MainHome';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={MainHome} />
          <Route path="/my-profile" component={MyProfile} />
          <Route path="/categories" component={Categories} />
          <Route path="/categories" component={Sport} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
