import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const GithubUser = ({ user }) => {
  const navigation = useNavigation();

  const goToUserDetails = () => {
    navigation.navigate('Details', { user });
  };

  return (
    <View style={styles.user}>
      <Image style={styles.userImage} source={{ uri: user.avatar }} />
      <Text style={styles.userLogin}>{user.name}</Text>
      <Pressable style={styles.userDetailsLink} onPress={goToUserDetails}>
        <Text style={styles.userDetailsLinkText}>{'>'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },

  userImage: {
    width: 48,
    height: 48,
    marginRight: 16,
    borderRadius: 50,
    overflow: 'hidden',
  },

  userLogin: {
    fontSize: 20,
  },

  userDetailsLink: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignSelf: 'center',
    marginLeft: 'auto',
  },

  userDetailsLinkText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GithubUser;
