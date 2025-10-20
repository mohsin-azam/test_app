// App.js
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { WatchScreen } from '~screens/app';
import ScreenNames from '~routes/routes';
import { AppColors } from '~utils';
import { width } from '~utils/dimensions';

// Simple screens
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
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2E2739',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          overflow: 'hidden',
          height: 70,
        },
        tabBarActiveTintColor: '#FFD700', // gold color for active tab
        tabBarInactiveTintColor: '#B0A8B9',
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialDesignIcons name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.WATCH}
        component={WatchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialDesignIcons name="tv" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Media Library"
        component={MediaLibraryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialDesignIcons
              name="video-library"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialDesignIcons name="more-horiz" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: AppColors.secondary,
    fontSize: width(4),
  },
});
