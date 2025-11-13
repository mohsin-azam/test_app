import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, Platform } from 'react-native';
import { Icons } from '~assets';
import ScreenNames from '~routes/routes';
import { WatchScreen } from '~screens/app';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import { height, width } from '~utils/dimensions';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function DashboardScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Dashboard Screen</Text>
    </View>
  );
}

function MediaLibraryScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Media Library Screen</Text>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>More Screen</Text>
    </View>
  );
}

export default function App() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: AppColors.primary,
          borderTopLeftRadius: width(7),
          borderTopRightRadius: width(7),
          height: Platform.OS === 'ios' ? height(10) : height(9),
          paddingBottom:
            Platform.OS === 'ios' ? height(3) : insets?.bottom + height(1),
          paddingTop: height(2),
          borderTopWidth: 0,
          elevation: 10,
        },
        tabBarActiveTintColor: AppColors.activeIcon,
        tabBarInactiveTintColor: AppColors.inActiveIcon,
        tabBarLabelStyle: {
          fontSize: width(2.5),
          fontFamily: AppFonts.robotoBold,
          marginTop: height(0.5),
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={Icons.dashboard}
              resizeMode="contain"
              style={{
                width: width(4.5),
                height: width(4.5),
                tintColor: focused
                  ? AppColors.activeIcon
                  : AppColors.inActiveIcon,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={ScreenNames.WATCH}
        component={WatchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={Icons.watch}
              resizeMode="contain"
              style={{
                width: width(4.5),
                height: width(4.5),
                tintColor: focused
                  ? AppColors.activeIcon
                  : AppColors.inActiveIcon,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Media Library"
        component={MediaLibraryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={Icons.media}
              resizeMode="contain"
              style={{
                width: width(4.5),
                height: width(4.5),
                tintColor: focused
                  ? AppColors.activeIcon
                  : AppColors.inActiveIcon,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={Icons.more}
              resizeMode="contain"
              style={{
                width: width(4.5),
                height: width(4.5),
                tintColor: focused
                  ? AppColors.activeIcon
                  : AppColors.inActiveIcon,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
