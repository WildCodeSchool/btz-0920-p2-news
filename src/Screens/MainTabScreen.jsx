// import React from 'react';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

// import Icon from 'react-native-vector-icons/Ionicons';

// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';
// import TrendsScreen from './TrendsScreen';
// import CategorieScreen from './CategorieScreen';

// const HomeStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}
//   >
//     <HomeStack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         title: 'HomePage',
//         headerLeft: () => (
//           <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" />
//         ),
//       }}
//     />
//   </HomeStack.Navigator>
// );

// const TrendsStackScreen = ({ navigation }) => (
//   <TrendsStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#1f65ff',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}
//   >
//     <TrendsStack.Screen
//       name="Trends"
//       component={TrendsScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" />
//         ),
//       }}
//     />
//   </TrendsStack.Navigator>
// );

// const ProfileStackScreen = ({ navigation }) => (
//   <ProfileStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}
//   >
//     <ProfileStack.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" />
//         ),
//       }}
//     />
//   </ProfileStack.Navigator>
// );

// const CategorieStackScreen = ({ navigation }) => (
//   <CategorieStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#1f65ff',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}
//   >
//     <CategorieStack.Screen
//       name="Categories"
//       component={CategorieScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" />
//         ),
//       }}
//     />
//   </CategorieStack.Navigator>
// );

// const HomeStack = createStackNavigator();
// const ProfileStack = createStackNavigator();
// const TrendsStack = createStackNavigator();
// const CategorieStack = createStackNavigator();

// const Tab = createMaterialBottomTabNavigator();

// const MainTabScreen = () => (
//   <Tab.Navigator initialRouteName="Home" activeColor="#fff">
//     <Tab.Screen
//       name="Home"
//       component={HomeStackScreen}
//       options={{
//         tabBarLabel: 'HomePage',
//         tabBarColor: '#1f65ff',
//         tabBarIcon: ({ color }) => (
//           <Icon
//             name="ios-notifications"
//             color={color}
//             size={26}
//             backgroundColor="#009387"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Profil"
//       component={ProfileStackScreen}
//       options={{
//         tabBarLabel: 'Profil',
//         tabBarColor: '#009387',
//         tabBarIcon: ({ color }) => (
//           <Icon
//             name="ios-home"
//             color={color}
//             size={26}
//             backgroundColor="#1f65ff"
//             // eslint-disable-next-line no-undef
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Trends"
//       component={TrendsStackScreen}
//       options={{
//         tabBarLabel: 'Trend',
//         tabBarColor: '#1f65ff',
//         tabBarIcon: ({ color }) => (
//           <Icon
//             name="ios-notifications"
//             color={color}
//             size={26}
//             backgroundColor="#1f65ff"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Categorie"
//       component={CategorieStackScreen}
//       options={{
//         tabBarLabel: 'Categories',
//         tabBarColor: '#694fad',
//         tabBarIcon: ({ color }) => (
//           <Icon
//             name="ios-person"
//             color={color}
//             size={26}
//             backgroundColor="#009387"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// export default MainTabScreen;
