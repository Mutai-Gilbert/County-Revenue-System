import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { ParkingFormScreen } from '../screens/forms/ParkingFormScreen';
import { MarketFormScreen } from '../screens/forms/MarketFormScreen';
import { CessFormScreen } from '../screens/forms/CessFormScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

// Placeholder screens
const MyHistoryScreen = () => null;
const MyProfileScreen = () => null;
const FishCessForm = () => null;
const ParkFeeForm = () => null;
const FireServiceForm = () => null;
const TransactionRecon = () => null;
const AssetHireForm = () => null;
const PublicHealthForm = () => null;

export type RootStackParamList = {
  Home: undefined;
  'My History': undefined;
  'My Profile': undefined;
  FishCessForm: undefined;
  ParkFeeForm: undefined;
  FireServiceForm: undefined;
  TransactionRecon: undefined;
  AssetHireForm: undefined;
  PublicHealthForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="My History" component={MyHistoryScreen} />
        <Stack.Screen name="My Profile" component={MyProfileScreen} />
        <Stack.Screen name="FishCessForm" component={FishCessForm} />
        <Stack.Screen name="ParkFeeForm" component={ParkFeeForm} />
        <Stack.Screen name="FireServiceForm" component={FireServiceForm} />
        <Stack.Screen name="TransactionRecon" component={TransactionRecon} />
        <Stack.Screen name="AssetHireForm" component={AssetHireForm} />
        <Stack.Screen name="PublicHealthForm" component={PublicHealthForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 