import 'react-native-reanimated';
import 'react-native-gesture-handler'; // If you're using gesture libraries too
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }} children={
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
          <Toast />
        </NavigationContainer>
      </Provider>
    } />
  );
};

export default App;
