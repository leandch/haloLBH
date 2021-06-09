import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILLogokecil} from '../../assets/illustration';
import {Firebase} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const wipeScreen = Firebase.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });
    return () => wipeScreen();
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogokecil />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#A41726',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
