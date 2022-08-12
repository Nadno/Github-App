import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 12px;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Visibility = styled.Text`
  padding: 4px 12px;
  font-size: 12px;
  border-radius: 100px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  margin-horizontal: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  font-size: 12px;
  margin-bottom: 12px;
`;

export const Footer = styled.View`
  margin-top: 24px;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
`;

export const TopicList = styled.FlatList`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Topic = styled(Visibility)`
  font-size: 8px;
  color: #f1f1f1;
  margin-left: 0;
  margin-right: 2px;
  margin-bottom: 8px;
  background-color: #111;
`;

export const Stars = styled.Text`
  font-size: 10px;
  font-weight: bold;
  margin-left: auto;
`;

export const UpdatedAt = styled.Text`
  font-size: 10px;
  margin-left: auto;
`;
