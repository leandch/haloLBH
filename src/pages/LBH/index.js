import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DummyLBHJkt, DummyLBHUpn} from '../../assets/dummy';
import {ILLBHUpn} from '../../assets/illustration';
import ListLBH from '../../components/molecules/ListLBH';
import {colors, fonts} from '../../utils';

const LBH = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILLBHUpn} style={styles.imgbg}>
        <Text style={styles.header}>LBH di Sekitarmu</Text>
        <Text style={styles.body}>2 LBH</Text>
      </ImageBackground>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListLBH
            name="LKBH UPN Veteran Jakarta"
            address="Jl.Fatmawati"
            pic={DummyLBHUpn}
          />
          <ListLBH
            name="Lembaga Bantuan Hukum Jakarta"
            address="Jl. Pangeran Diponegoro No.74"
            pic={DummyLBHJkt}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default LBH;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  imgbg: {
    width: 411,
    height: 194,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    flex: 1,
    marginTop: -25,
  },
  header: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.white,
    textAlign: 'center',
    marginTop: 10,
  },
  body: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
    textAlign: 'center',
  },
});
