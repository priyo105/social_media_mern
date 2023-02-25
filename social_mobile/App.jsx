import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <SafeAreaView>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>  

      <ScrollView>
             <View>
               <Text style={{textAlign:"center",marginTop:100,color:"red"}}> asdasd</Text>
             </View>
      </ScrollView>
      </PersistGate>
    </Provider> 
    </SafeAreaView>
  );
}
export default App;
