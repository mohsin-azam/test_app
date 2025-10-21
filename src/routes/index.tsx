import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import MyTabBar from './bottom';
import ScreenNames from './routes';
import { Booking, MovieDetail, ViewScreens } from '~screens/app';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames?.BOTTOM_TAB}
        screenOptions={{ header: () => false }}
      >
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={MyTabBar} />
        <Stack.Screen name={ScreenNames.BOOKING} component={Booking} />
        <Stack.Screen name={ScreenNames.MOVIE_DETAIL} component={MovieDetail} />
        <Stack.Screen name={ScreenNames.VIEW_SCREENS} component={ViewScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
