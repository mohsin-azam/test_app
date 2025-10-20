import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import MyTabBar from './bottom';
import ScreenNames from './routes';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames?.BOTTOM_TAB}
        screenOptions={{ header: () => false }}
      >
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={MyTabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
