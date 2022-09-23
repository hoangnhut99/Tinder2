import React from 'react';
import Main from './src/MainScreen/Main';
import LikeUserScreen from './src/MainScreen/LikeUser/LikeUserScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator()
const App = () => {
  return (
    // <Main/>
    <LikeUserScreen/>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Main"
    //     screenOptions={{
    //       headerShown: false,
    //       animation: 'none',
    //     }}>
    //     <Stack.Screen name="Main" component={Main} />
    //     <Stack.Screen name="LikeUserScreen" component={LikeUserScreen} />
      
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
