import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  DummyJakbar,
  DummyJakpus,
  DummyJaksel,
  DummyJaktim,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListLBH = ({domisili, onPress}) => {
  const Cover = () => {
    if (domisili === 'Selatan') {
      return <DummyJaksel style={styles.gambar} />;
    }
    if (domisili === 'Pusat') {
      return <DummyJakpus style={styles.gambar} />;
    }
    if (domisili === 'Barat') {
      return <DummyJakbar style={styles.gambar} />;
    }
    if (domisili === 'Timur') {
      return <DummyJaktim style={styles.gambar} />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Cover />
    </TouchableOpacity>
  );
};

export default ListLBH;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginLeft: 26,
  },
  gambar: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.text.aboveRed,
    maxWidth: 160,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.aboveRed,
  },
});
