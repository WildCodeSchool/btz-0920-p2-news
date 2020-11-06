import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MyProfile from './MyProfile';

const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/my-profile" component={MyProfile}>
          <MyProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Pages;
