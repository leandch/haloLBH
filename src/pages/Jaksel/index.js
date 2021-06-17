import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DomisiliLBH, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyLBHTridharma, DummyLBHUpn} from '../../assets';

const Jaksel = ({navigation}) => {
  const [jaksels] = useState([
    {
      id: 1,
      lbh: 'LKBH UPN Veteran Jakarta',
      alamat:
        'Jl. Pd. Labu Raya No.1, Pangkalan Jati, Kec. Cinere, Kota Depok, Jawa Barat 16514',
      image: DummyLBHUpn,
    },
    {
      id: 2,
      lbh: 'LBH Tridharma Indonesia',
      alamat:
        ' Jl. Harsono RM, RT.9/RW.4, Ragunan, Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550',
      image: DummyLBHTridharma,
    },
  ]);
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        onPress={() => navigation.goBack()}
        title="Jakarta Selatan"
      />
      <View style={styles.content}>
        {jaksels.map(item => {
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

export default Jaksel;

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
