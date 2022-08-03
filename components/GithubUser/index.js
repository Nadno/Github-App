import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as User from './styles';

const GithubUser = ({ user }) => {
  const navigation = useNavigation();

  const goToUserDetails = () => {
    navigation.navigate('Details', { user });
  };

  return (
    <User.Container>
      <User.Img src={user.avatar} />
      <User.Name>{user.name}</User.Name>
      <User.DetailsLink onPress={goToUserDetails}>
        <User.DetailsLinkText>{'>'}</User.DetailsLinkText>
      </User.DetailsLink>
    </User.Container>
  );
};

export default GithubUser;
