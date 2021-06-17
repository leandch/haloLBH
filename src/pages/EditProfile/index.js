import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, Gap, Header, Input, UserData} from '../../components';
import {colors, getData, storeData} from '../../utils';
import {Firebase} from '../../config';
import {ILProfilenull} from '../../assets';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    nama: '',
    pekerjaan: '',
    email: '',
  });

  const [password, setPassword] = useState('');
  const [image, setImage] = useState(ILProfilenull);
  const [imageForDB, setImageForDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.imageForDB = res?.image?.length > 1 ? res.image : ILProfilenull;
      const tempImage =
        res?.image?.length > 1 ? {uri: res.image} : ILProfilenull;
      setImage(tempImage);
      setProfile(data);
    });
  }, []);

  const update = () => {
    if (password.length > 0) {
      if (password.length < 8) {
        showMessage('Password harus terdiri dari 8 karakter');
      } else {
        updatePassword();
        updateProfile();
      }
    } else {
      updateProfile();
    }
    // navigation.replace('MainApp');
  };

  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showMessage(err.message);
        });
      }
    });
  };

  const updateProfile = () => {
    const data = profile;
    data.image = imageForDB;
    delete data.imageForDB;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data)
          .then(() => {
            navigation.replace('MainApp');
          })
          .catch(() => {
            showMessage('Terjadi Masalah');
          });
      })
      .catch(err => {
        showMessage(err.message);
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    launchImageLibrary(
      {
        quality: 0.75,
        maxHeight: 200,
        maxWidth: 200,
        includeBase64: true,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel || response.error) {
          showMessage('Tidak Jadi ganti Foto');
        } else {
          const source = {uri: response.assets[0].uri};
          setImageForDB(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setImage(source);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserData image={image} isRemove onPress={getImage} />
        <View style={styles.content}>
          <Input
            label="Fullname"
            value={profile.nama}
            onChangeText={value => changeText('nama', value)}
          />
          <Gap height={20} />
          <Input
            label="Pekerjaan"
            value={profile.pekerjaan}
            onChangeText={value => changeText('pekerjaan', value)}
          />
          <Gap height={20} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={20} />
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <Gap height={30} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
});
