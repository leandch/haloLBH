import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatInput, ChatItem, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {Firebase} from '../../config';

const Chat = ({navigation, route}) => {
  const dataKonsultan = route.params;
  const [chatContent, setChatContent] = useState('');

  const chatSend = () => {
    console.log('chat yang akan dikirim: ', chatContent);
    setChatContent('');
  };
  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack()}
        type="dark-profile"
        title={dataKonsultan.data.nama}
        text={dataKonsultan.data.kategori}
        image={{uri: dataKonsultan.data.image}}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.date}>1 Mei 2021</Text>
          <ChatItem isMe />
          <ChatItem Other />
          <ChatItem isMe />
        </ScrollView>
      </View>
      <ChatInput
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  date: {
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    paddingVertical: 20,
  },
  content: {
    flex: 1,
  },
});
