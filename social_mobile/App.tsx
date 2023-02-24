import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
  
      <ScrollView>
             <View>
               <Text style={{textAlign:"center",marginTop:100,color:"red"}}> asdasd</Text>
             </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
