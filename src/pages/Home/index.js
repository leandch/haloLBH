import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {
  HomeProfile,
  KategoriHukum,
  RatedConsultant,
  // TentangHukum,
} from '../../components/molecules';
import {colors, fonts, getData} from '../../utils';
import {useState, useEffect} from 'react';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {ILProfilenull} from '../../assets';

const Home = ({navigation}) => {
  const [kategoriHukum, setKategoriHukum] = useState([]);
  const [konsultans, setKonsultans] = useState([]);
  const [profile, setProfile] = useState({
    image: ILProfilenull,
    nama: '',
  });

  console.log(kategoriHukum);
  console.log(konsultans);

  useEffect(() => {
    getKategoriKonsultan();
    getTopRatedKonsultan();
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);

  const getTopRatedKonsultan = () => {
    Firebase.database()
      .ref('konsultans/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setKonsultans(data);
        }
      })
      .catch(err => {
        showMessage(err.message);
      });
  };

  const getKategoriKonsultan = () => {
    Firebase.database()
      .ref('kategori_hukum/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setKategoriHukum(filterData);
        }
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'danger',
        });
      });
  };

  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
      data.image = res?.image?.length > 1 ? {uri: res.image} : ILProfilenull;
      setProfile(res);
    });
  };

  return (
    <View style={styles.page}>
      <HomeProfile
        profile={profile}
        style={styles.profile}
        onPress={() => navigation.navigate('UserProfile', profile)}
      />
      <Gap height={10} />
      <View style={styles.page}>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.welcome}>
              Mau konsultasi masalah apa hari ini?
            </Text>
            <Gap height={10} />
            <View style={styles.wrapper}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.kategori}>
                  <Gap width={20} />
                  {kategoriHukum.map(item => {
                    return (
                      <KategoriHukum
                        key={`kategori_hukum-${item.id}`}
                        kategori={item.kategori}
                        onPress={() =>
                          navigation.navigate('PilihKonsultan', item)
                        }
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.label}>Konsultan Terpercaya</Text>
              {konsultans.map(konsultan => {
                <RatedConsultant
                  onPress={() =>
                    navigation.navigate('ProfileKonsultan', konsultan)
                  }
                  key={konsultan.id}
                  name={konsultan.nama}
                  desc={konsultan.kategori}
                  image={{uri: konsultan.image}}
                />;
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    paddingVertical: 30,
    paddingHorizontal: 20,
    flex: 1,
    // borderBottomRightRadius: 25,
    // borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  profile: {
    backgroundColor: colors.primary,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    maxWidth: 283,
  },
  kategori: {
    flexDirection: 'row',
  },
  wrapper: {
    marginHorizontal: -20,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    paddingBottom: 10,
  },
});
