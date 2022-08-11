import React, { useEffect } from 'react';
import { Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as User from './styles';
import useValueAnimation from '../../hooks/useValueAnimation';

const GithubUser = ({ user, count = 1 }) => {
  const navigation = useNavigation();
  const slideDown = useValueAnimation({
    from: 12,
    to: 0,
    delay: count * 50,
    duration: 250,
    useNativeDriver: false,
    easing: Easing.ease,
  });

  const fadeIn = useValueAnimation({
    from: 0,
    to: 1,

    delay: count * 50,
    duration: 150,
    useNativeDriver: false,
    easing: Easing.ease,
  });

  const goToUserDetails = () => {
    navigation.navigate('Details', { user });
  };

  useEffect(() => {
    slideDown.start();
    fadeIn.start();
  }, [fadeIn, slideDown]);

  return (
    <User.Container
      style={{
        transform: [{ translateY: slideDown.value }],
        opacity: fadeIn.value,
      }}
    >
      <User.Img src={user.avatar} />
      <User.Name>{user.name}</User.Name>
      <User.DetailsLink onPress={goToUserDetails}>
        <User.DetailsLinkText>{'>'}</User.DetailsLinkText>
      </User.DetailsLink>
    </User.Container>
  );
};

export default GithubUser;
