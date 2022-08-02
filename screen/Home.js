import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

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

const Home = () => {
  const [users, setUsers] = useState(() => []);
  const [isLoading, setIsLoading] = useState(true);

  const transformUserData = ({
    login,
    avatar_url,
    repos_url,
    followers_url,
    following_url,
  }) => ({
    name: login,
    avatar: avatar_url,
    reposUrl: repos_url,
    followersUrl: followers_url,
    followingUrl: following_url,
  });

  const fetchGithubUsers = async () => {
    try {
      const users = await fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(users => users.map(transformUserData));

      setUsers(users);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (users.length) return setIsLoading(false);
    fetchGithubUsers();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="#111" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.userList}
        data={users}
        renderItem={({ item: user }) => <GithubUser user={user} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    color: '#111',
  },

  userList: {
    width: '100%',
  },

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

export default Home;
