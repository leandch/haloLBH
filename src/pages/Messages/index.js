import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyKonsultan, DummyKonsultan1, ILChat} from '../../assets';
import {Gap} from '../../components/atoms';
import {ListUser} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = ({navigation}) => {
  const [konsultans] = useState([
    {
      id: 1,
      image: DummyKonsultan,
      name: 'Mardian Rizky, S.H',
      text: 'Halo pak, apakah kasus tsb...',
    },
    {
      id: 2,
      image: DummyKonsultan1,
      name: 'Hadi Kurnia, S.H',
      text: 'Sebaiknya seperti apa yak pak karna....',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ILChat />
          <Gap width={5} />
          <Text style={styles.header}>Messages</Text>
        </View>
        {konsultans.map(konsultan => {
          return (
            <ListUser
              key={konsultan.id}
              image={konsultan.image}
              name={konsultan.name}
              text={konsultan.text}
              onPress={() => navigation.navigate('Chat', konsultan)}
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
