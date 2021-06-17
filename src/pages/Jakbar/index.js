import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DomisiliLBH, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyLBHKHM, DummyLBHAdfo} from '../../assets';

const Jakbar = ({navigation}) => {
  const [jakbars] = useState([
    {
      id: 1,
      lbh: 'LBH KHM Indonesia',
      alamat:
        'Jl. Jelambar Barat No.A I. / 8, RT.1/RW.7, Jelambar Baru, Kec. Grogol petamburan, DKI Jakarta 11460',
      image: DummyLBHKHM,
    },
    {
      id: 2,
      lbh: 'LBH ADFOTICE',
      alamat:
        'Jl. Pangeran Tubagus Angke No.1, RT.9/RW.1, Pekojan, Kec. Tambora, Kota Jakarta Barat, DKI Jakarta 11240',
      image: DummyLBHAdfo,
    },
  ]);
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        onPress={() => navigation.goBack()}
        title="Jakarta Barat"
      />
      <View style={styles.content}>
        {jakbars.map(item => {
          return (
            <DomisiliLBH
              key={item.id}
              title={item.lbh}
              address={item.alamat}
              image={item.image}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Jakbar;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  label: {
    fontSize: 20,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
});
