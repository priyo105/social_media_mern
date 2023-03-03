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
          <Text style={styles.text}>PicTik</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
  },
  
  text:{
    fontSize:20,
    color:"#00D5FA",
    fontWeight:"bold"
  }

});

export default Splash;