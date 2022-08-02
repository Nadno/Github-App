import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';

const Repository = ({ repo, style }) => {
  return (
    <View style={style}>
      <Text>Name: {repo.name}</Text>
      <Text>Description: {repo.description}</Text>
    </View>
  );
};

const Details = ({ route }) => {
  const { name, avatar, reposUrl, followersUrl, followingUrl } =
    route.params.user;

  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState({
    repos: true,
    followers: true,
    following: true,
  });

  useEffect(() => {
    (async () => {
      let repos = await fetch(reposUrl).then(res => res.json());

      repos = repos.map(
        ({ name, description, stargazers_count, watchers_count }) => ({
          name,
          description,
          starts: stargazers_count,
          watchers: watchers_count,
        })
      );

      setData(prevData => ({ ...prevData, repos }));
      setIsLoading(isLoading => ({ ...isLoading, repos: false }));
    })();
  }, [reposUrl]);

  useEffect(() => {
    (async () => {
      const followers = await fetch(followersUrl).then(res => res.json());
      setData(prevData => ({ ...prevData, followers: followers.length }));
      setIsLoading(isLoading => ({ ...isLoading, followers: false }));
    })();
  }, [followersUrl]);

  useEffect(() => {
    (async () => {
      const following = await fetch(followingUrl).then(res => res.json());
      setData(prevData => ({ ...prevData, following: following.length || 0 }));
      setIsLoading(isLoading => ({ ...isLoading, following: false }));
    })();
  }, [followingUrl]);

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image style={styles.userImage} source={{ uri: avatar }} />

        <View>
          <Text style={styles.userLogin}>{name}</Text>
          <Text style={styles.userFollow}>
            Followers:{' '}
            {isLoading.followers ? (
              <ActivityIndicator color="#111" />
            ) : (
              data.followers
            )}
          </Text>
          <Text style={styles.userFollow}>
            Following:{' '}
            {isLoading.following ? (
              <ActivityIndicator color="#111" />
            ) : (
              data.following
            )}
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.repoListContainer}>
          <Text>Repos:</Text>

          {isLoading.repos ? (
            <ActivityIndicator size="large" color="#111" />
          ) : (
            <FlatList
              style={styles.repoList}
              data={data.repos}
              renderItem={({ item }) => (
                <Repository repo={item} style={styles.repoListItem} />
              )}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    color: '#111',
    backgroundColor: '#f1f1f1',
    display: 'flex',
    alignItems: 'center',
  },

  loader: {
    width: 8,
    height: 8,
  },

  user: {
    width: '100%',
    maxWidth: 300,
    marginVertical: 32,
    padding: 16,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 8,
  },

  userFollow: {
    fontSize: 10,
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

  repoListContainer: {
    width: '100%',
    maxWidth: 300,
    marginTop: 8,
  },

  repoList: {
    marginTop: 8,
  },

  repoListItem: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
});

export default Details;
