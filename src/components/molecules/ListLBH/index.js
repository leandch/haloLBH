import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyLBHUpn} from '../../../assets/dummy';
import {colors, fonts} from '../../../utils';

const ListLBH = ({name, address, pic}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.gambar} />
      <View>
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.text}>{address}</Text>
      </View>
    </View>
  );
};

export default ListLBH;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
    alignItems: 'center',
  },
  gambar: {
    width: 83,
    height: 62,
    borderRadius: 10,
    marginLeft: 37,
    marginRight: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    maxWidth: 160,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: '#977D7D',
  },
});
