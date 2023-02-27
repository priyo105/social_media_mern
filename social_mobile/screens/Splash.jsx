import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
          <Text>PicTik</Text>
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
});

export default Splash;