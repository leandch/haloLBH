import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyKonsultan} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyKonsultan} style={styles.image} />
      <View>
        <View style={styles.bubleChat}>
          <Text style={styles.text}>
            Halo siang bu Leandra bagaimana kabarnya? apakah baik baik saja atau
            ada keluhans
          </Text>
        </View>
        <Text style={styles.date}>15.30</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  bubleChat: {
    backgroundColor: colors.primary,
    padding: 15,
    paddingLeft: 20,
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    maxWidth: '85%',
  },
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.text.aboveRed,
  },
  date: {
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
});
