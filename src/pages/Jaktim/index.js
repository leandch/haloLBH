import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DomisiliLBH, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyLBHTrisila, DummyLBHApik} from '../../assets';

const Jaktim = ({navigation}) => {
  const [jaktims] = useState([
    {
      id: 1,
      lbh: 'LBH Trisila Jakarta',
      alamat:
        'Jl. Kayu Putih IX E No.mor 40, RT.10/RW.5, Pulo Gadung, Kec. Pulo Gadung, DKI Jakarta 13260',
      image: DummyLBHTrisila,
    },
    {
      id: 2,
      lbh: 'LBH Apik',
      alamat:
        'Jl. Raya Tengah No.31, RT.1/RW.9, Kp. Tengah, Kec. Kramat jati, Kota Jakarta Timur, DKI Jakarta 13520',
      image: DummyLBHApik,
    },
  ]);
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        onPress={() => navigation.goBack()}
        title="Jakarta Timur"
      />
      <View style={styles.content}>
        {jaktims.map(item => {
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

export default Jaktim;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 20,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
});
