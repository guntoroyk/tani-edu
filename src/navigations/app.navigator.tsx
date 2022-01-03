/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Icon, IconButton, Pressable, View } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import InfoTaniList from '../screens/InfoTani/InfoTaniList';
import InfoTaniDetail from '../screens/InfoTani/InfoTaniDetail';
import TipsBudidayaList from '../screens/TipsBudidaya/TipsBudidayaList';
import TipsBudidayaDetail from '../screens/TipsBudidaya/TipsBudidayaDetail';
import CommodityPrice from '../screens/CommodityPrice';
import CommodityPriceDetail from '../screens/CommodityPrice/CommodityPriceDetail';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Akun!</Text>
    </View>
  );
}

const BottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'account' : 'account-outline';
          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={32} color={color} />;
          return (
            <IconButton
              disabled
              borderRadius="2xl"
              bg={focused ? '#22c55e' : '#ffffff'}
              variant={focused ? 'solid' : 'ghost'}
              px={3}
              py={1}
              mb={Platform.OS === 'ios' ? 5 : 0}
              icon={
                <Icon
                  color={color}
                  name={iconName}
                  as={MaterialCommunityIcons}
                  size="sm"
                />
              }
            />
          );
        },
        tabBarActiveTintColor: '#22c55e',
        tabBarInactiveTintColor: '#64748B',
        tabBarLabelStyle: { fontSize: 16 },
        tabBarStyle: { height: 60 },
      })}>
      <BottomTab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerTitle: () => (
            <Text bold fontSize="2xl">
              TaniEdu
            </Text>
          ),
          headerRight: () => (
            <Pressable
              mr={2}
              p={1}
              rounded="xl"
              _pressed={{ background: 'gray.300' }}
              // onPress={() => navigation.navigate('Notifications')}
            >
              <Icon
                name="dots-vertical"
                as={MaterialCommunityIcons}
                size="sm"
              />
            </Pressable>
          ),
          title: 'Beranda',
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={SettingsScreen}
        options={{ title: 'Akun' }}
      />
    </BottomTab.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="InfoTani"
        component={InfoTaniList}
        options={{
          headerTitle: 'Info Tani',
        }}
      />
      <HomeStack.Screen
        name="InfoTaniDetail"
        component={InfoTaniDetail}
        options={{
          headerTitle: '',
        }}
      />
      <HomeStack.Screen
        name="TipsBudidaya"
        component={TipsBudidayaList}
        options={{
          headerTitle: 'Budidaya',
        }}
      />
      <HomeStack.Screen
        name="TipsBudidayaDetail"
        component={TipsBudidayaDetail}
        options={{
          headerTitle: '',
        }}
      />
      <HomeStack.Screen
        name="CommodityPrice"
        component={CommodityPrice}
        options={{
          headerTitle: 'Harga Komoditas',
        }}
      />
      <HomeStack.Screen
        name="CommodityPriceDetail"
        component={CommodityPriceDetail}
        options={{
          headerTitle: 'Harga Komoditas Detail',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
}
