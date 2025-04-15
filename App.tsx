import 'react-native-reanimated';
import 'react-native-gesture-handler'; // If you're using gesture libraries too
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; 
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AppNavigator /> 
    </NavigationContainer>
    </Provider>
  );
};

export default App;
