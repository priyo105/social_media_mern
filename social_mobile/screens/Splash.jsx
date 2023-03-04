import React, { useEffect } from 'react';
import { StyleSheet, View, Image,Text } from 'react-native';

const Splash = ({ navigation }) => {

  navigationOptions = {
    header: null
  }
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [navigation]);

  return (
   <View style={styles.container}>
      <View >
          <Text style={styles.text}>PicTik</Text>
      </View>

    <Text style={{marginTop:100,justifyContent:"flex-end"}} >Developed by Adnan</Text>
   </View> 
  


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
  },
  
  text:{
    fontSize:30,
    color:"#00D5FA",
    fontWeight:"bold",
    flex:.5,
    fontFamily:"ArialMT"
  }

});

export default Splash;