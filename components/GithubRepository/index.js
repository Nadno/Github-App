import { Text, View } from 'react-native';
import {
  Container,
  Description,
  Header,
  Name,
  Topic,
  TopicList,
  Visibility,
  UpdatedAt,
  Stars,
} from './styles';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getLocaleDate = dateTime => {
  const date = new Date(dateTime);

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const truncate = (words, max) => {
  if (words.length <= max) return words;
  return words.slice(0, max - 4).concat(' ...');
};

const Repository = ({
  repo: { name, visibility, description, stars, topics, updatedAt },
  style,
}) => {
  return (
    <Container style={style}>
      <Header>
        <Name>{truncate(name, 20)}</Name>
        <Visibility>{visibility}</Visibility>
        <Stars>
          <Text style={{ fontSize: 14 }}>☆</Text> {stars}
        </Stars>
      </Header>

      {description && <Description>{description}</Description>}

      <View>
        {topics && (
          <TopicList
            data={topics.slice(1, 6)}
            orientation="horizontal"
            renderItem={({ item: topic }) => <Topic>{topic}</Topic>}
            removeClippedSubviews
          />
        )}

        <UpdatedAt>Updated on {getLocaleDate(updatedAt)}</UpdatedAt>
      </View>
    </Container>
  );
};

export default Repository;
