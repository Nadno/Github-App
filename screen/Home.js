import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';

import GithubUser from '../components/GithubUser';

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
});

export default Home;
