import { useRef } from 'react';
import { Animated } from 'react-native';

const useValueAnimation = ({ from, to, ...timing }) => {
  const ani = useRef(new Animated.Value(from)).current;
  const control = useRef(
    Animated.timing(ani, {
      toValue: to,
      ...timing,
    })
  ).current;

  return {
    value: ani,
    start: control.start,
  };
};

export default useValueAnimation;
