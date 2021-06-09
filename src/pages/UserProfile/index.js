import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Gap, ListUser, UserData} from '../../components';
import {colors, getData} from '../../utils';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    nama: '',
    pekerjaan: '',
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.image = {uri: res.image};
      setProfile(data);
    });
  });

  const logOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        console.log('success sign out');
        navigation.replace('Login');
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.page}>
      {profile.nama.length > 0 && (
        <UserData
          pic={DummyUser}
          name={profile.nama}
          desc={profile.pekerjaan}
          image={profile.image}
          style={styles.container}
        />
      )}
      <Gap height={15} />
      <View style={styles.content}>
        <ListUser
          name="Edit Profile"
          text="Last Update 2 Days Ago"
          type="next"
          icon="edit-profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <ListUser
          name="Log Out"
          type="next"
          text="Tap to Logout"
          icon="help"
          onPress={logOut}
        />
      </View>
      {/* <TouchableOpacity style={styles.logout}>
        <Button title="Log Out" />
      </TouchableOpacity> */}
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 30,
  },
  content: {
    paddingHorizontal: 15,
  },
  container: {
    backgroundColor: colors.primary,
  },
  logout: {
    paddingHorizontal: 70,
    paddingVertical: 200,
  },
});
