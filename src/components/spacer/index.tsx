import React, { FC } from 'react';
import { View } from 'react-native';

interface SpacerProps {
  horizontal?: number;
  vertical?: number;
}

const Spacer: FC<SpacerProps> = ({ horizontal, vertical }) => {
  return (
    <View
      style={{
        height: vertical ?? 0,
        width: horizontal ?? 0,
      }}
    />
  );
};

export default Spacer;
