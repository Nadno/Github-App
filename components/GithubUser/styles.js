import Image from '../Img';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  width: 100%;
  padding: 8px 16px;
  background-color: #fff;
  display: flex;

  flex-direction: row;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);

  transform: translateY(-12px);
`;

export const Img = styled(Image)`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50px;
  overflow: hidden;
`;

export const Name = styled.Text`
  font-size: 20px;
`;

export const DetailsLink = styled.Pressable`
  padding: 10px 24px;
  align-self: center;
  margin-left: auto;
`;

export const DetailsLinkText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;