import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import authReducer from "./state"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
//for redux persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './screens/Splash';
import Home from './screens/Home';
import Login from './screens/Login';
const Stack = createNativeStackNavigator();

// REDUX INITIALIZATIONS 
const persistConfig={
  key:"root", 
  storage: AsyncStorage,
 version:1
}
const persistedReducer=persistReducer(persistConfig,authReducer);

const store= configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[FLUSH,REHYDRATE, PAUSE,PERSIST, PURGE,REGISTER]
      }
    })  
})


const App=()=> {
  return ( 
<NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>  
        <Stack.Navigator>
           <Stack.Screen name="Splash" 
                         component={Splash}    
                         options={{headerShown: false}} />
           <Stack.Screen name="Home"
                         component={Home} 
                         options={{headerShown: false}}
                         />

            <Stack.Screen name="Login"
                         component={Login} 
                         options={{headerShown: false}}
                         />
       </Stack.Navigator>
      </PersistGate>
    </Provider> 
</NavigationContainer>
  );
}
export default App;
