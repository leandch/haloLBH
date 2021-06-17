import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILChat} from '../../assets';
import {Gap, ListUser} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {Firebase} from '../../config';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const rootDB = Firebase.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async snapshot => {
      console.log('data history: ', snapshot.val());
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async key => {
          const urlUIDKonsultan = `konsultans/${oldData[key].uidPartner}`;
          const detailKonsultan = await rootDB
            .child(urlUIDKonsultan)
            .once('value');
          console.log('detail konsultan: ', detailKonsultan.val());
          data.push({
            id: key,
            detailKonsultan: detailKonsultan.val(),
            ...oldData[key],
          });
        });

        await Promise.all(promises);

        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ILChat />
          <Gap width={5} />
          <Text style={styles.header}>Messages</Text>
        </View>
        {historyChat.map(chat => {
          const dataKonsultan = {
            id: chat.detailKonsultan.uid,
            data: chat.detailKonsultan,
          };
          return (
            <ListUser
              key={chat.id}
              image={{uri: chat.detailKonsultan.image}}
              name={chat.detailKonsultan.nama}
              text={chat.lastChat}
              onPress={() => navigation.navigate('Chat', dataKonsultan)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  container: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
