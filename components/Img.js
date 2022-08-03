import React from 'react';
import { Image } from 'react-native';

const Img = ({ src: uri, ...props }, ref) => {
  return <Image ref={ref} source={{ uri }} {...props} />;
};

export default React.forwardRef(Img);
