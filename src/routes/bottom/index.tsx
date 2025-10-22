import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { Icons } from '~assets';
import ScreenNames from '~routes/routes';
import { WatchScreen } from '~screens/app';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import { height, width } from '~utils/dimensions';
import styles from './styles';

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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: AppColors.primary,
          borderTopLeftRadius: width(7),
          borderTopRightRadius: width(7),
          height: width(18),
          paddingVertical: height(1),
        },
        tabBarActiveTintColor: AppColors.activeIcon,
        tabBarInactiveTintColor: AppColors.inActiveIcon,
        tabBarLabelStyle: {
          fontSize: width(2.8),
          fontFamily: AppFonts.robotoBold,
          paddingBottom: height(2),
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={Icons.dashboard}
              resizeMode="contain"
              style={[
                styles.icon,
                {
                  tintColor: focused
                    ? AppColors.activeIcon
                    : AppColors.inActiveIcon,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.WATCH}
        component={WatchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            // <MaterialDesignIcons name="television" color={color} size={size} />
            <Image
              source={Icons.watch}
              resizeMode="contain"
              style={[
                styles.icon,
                {
                  tintColor: focused
                    ? AppColors.activeIcon
                    : AppColors.inActiveIcon,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Media Library"
        component={MediaLibraryScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={Icons.media}
              resizeMode="contain"
              style={[
                styles.icon,
                {
                  tintColor: focused
                    ? AppColors.activeIcon
                    : AppColors.inActiveIcon,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={Icons.more}
              resizeMode="contain"
              style={[
                styles.icon,
                {
                  tintColor: focused
                    ? AppColors.activeIcon
                    : AppColors.inActiveIcon,
                },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
