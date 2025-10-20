import React from 'react';
import { Text } from 'react-native';
import { ScreenWrapper } from '~components';
import { navProps } from '~utils/globalProps';

export default function WatchScreen({ navigation }: navProps) {
  return (
    <ScreenWrapper>
      <Text>Watch</Text>
    </ScreenWrapper>
  );
}
