import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILFindMap} from '../../assets';
import {fonts, colors} from '../../utils';
import {Gap, ListLBH} from '../../components';
// import ListLBH from '../../components/molecules/ListLBH';

const LBH = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ILFindMap style={styles.imgPage} />
        <Gap height={20} />
        <View style={styles.typo}>
          <Text style={styles.labelBlack}>Temukan</Text>
          <Text style={styles.labelRed}> Lembaga Bantuan</Text>
        </View>
        <View style={styles.typo}>
          <Text style={styles.labelRed}>Hukum</Text>
          <Text style={styles.labelBlack}> di Sekitarmu!</Text>
        </View>
        <Gap height={20} />
        {/* <Text style={styles.dom}>Jakarta</Text> */}
        <View style={styles.domRow}>
          <ListLBH
            domisili="Selatan"
            style={styles.gambar}
            onPress={() => navigation.navigate('Jaksel')}
          />
          <ListLBH
            domisili="Pusat"
            style={styles.gambar}
            onPress={() => navigation.navigate('Jakpus')}
          />
        </View>
        <View style={styles.domRow}>
          <ListLBH
            domisili="Barat"
            style={styles.gambar}
            onPress={() => navigation.navigate('Jakbar')}
          />
          <ListLBH
            domisili="Timur"
            style={styles.gambar}
            onPress={() => navigation.navigate('Jaktim')}
          />
        </View>
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default LBH;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flex: 1,
    alignContent: 'center',
  },
  typo: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  labelBlack: {
    fontSize: 22,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  labelRed: {
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.primary,
  },
  imgPage: {
    alignSelf: 'center',
  },
  domRow: {
    flexDirection: 'row',
  },
  gambar: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  dom: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
