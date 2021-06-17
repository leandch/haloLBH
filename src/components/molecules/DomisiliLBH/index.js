import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const DomisiliLBH = ({title, image, address}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={styles.labelTitle}>{title}</Text>
        <Text tyle={styles.label}>{address}</Text>
      </View>
    </View>
  );
};

export default DomisiliLBH;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    borderBottomColor: colors.border.secondary,
    padding: 15,
    paddingVertical: 20,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginRight: 18,
  },
  wrapper: {
    flex: 1,
  },
  labelTitle: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
    maxWidth: 250,
  },
});
