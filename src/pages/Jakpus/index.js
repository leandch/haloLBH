import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DomisiliLBH, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyLBHJkt, DummyLBHYLBHI} from '../../assets';

const Jakpus = ({navigation}) => {
  const [jakpuss] = useState([
    {
      id: 1,
      lbh: 'LBH Jakarta',
      alamat:
        'Jl. Pangeran Diponegoro No.74, RT.9/RW.2, Pegangsaan, Kec. Menteng, Kota Jakarta Pusat, DKI Jakarta 10320',
      image: DummyLBHJkt,
    },
    {
      id: 2,
      lbh: 'LBH Ansor Pusat',
      alamat:
        ' Jl. Kramat Raya No.65A, RT.1/RW.8, Kramat, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10450',
      image: DummyLBHYLBHI,
    },
  ]);
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        onPress={() => navigation.goBack()}
        title="Jakarta Pusat"
      />
      <View style={styles.content}>
        {jakpuss.map(item => {
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

export default Jakpus;

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
