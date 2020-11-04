// import { NavigationContainer } from '@react-navigation/native';

// import { createDrawerNavigator } from 'react-navigation-drawer';

import './App.css';
import MyCarousel from './components/MyCarousel';
import Header from './components/Header';
import Navigation from './components/Navbar';
import MainHome from './components/MainHome';

// import MainTabScreen from './Screens/MainTabScreen';

// const Drawer = createDrawerNavigator();

function App() {
  return (
    <div className="App">
      <Header />
      <MyCarousel />
      <MainHome className="App-header" />
      <Navigation />
      {/* <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={MainTabScreen} />
        </Drawer.Navigator>
      </NavigationContainer> */}
    </div>
  );
}

export default App;
