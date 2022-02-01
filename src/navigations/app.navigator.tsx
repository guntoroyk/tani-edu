import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Icon, IconButton, Pressable } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Article from '../screens/Article';
import Video from '../screens/Video';
import CommodityPrice from '../screens/CommodityPrice';
import WebViewScreen from '../screens/WebViewScreen';
import Search from '../screens/Search';
import SplashScreen from '../screens/SplashScreen';
import About from '../screens/About';
import AboutDetail from '../screens/About/AboutDetail';

const BottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const BottomTabNavigator = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Info') {
            iconName = focused ? 'information' : 'information-outline';
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
              TaniEDU
            </Text>
          ),
          headerRight: () => (
            <Pressable
              mr={2}
              p={1}
              rounded="xl"
              _pressed={{ background: 'gray.300' }}
              onPress={() => navigation.navigate('Info')}>
              <Icon name="information" as={MaterialCommunityIcons} size="sm" />
            </Pressable>
          ),
          title: 'Beranda',
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={About}
        options={{
          title: 'Info',
        }}
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
        name="Article"
        component={Article}
        options={{
          headerTitle: 'Bacaan',
        }}
      />
      <HomeStack.Screen
        name="Video"
        component={Video}
        options={{
          headerTitle: 'Video',
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
        name="Search"
        component={Search}
        options={{
          headerTitle: 'Cari Artikel',
        }}
      />
      <HomeStack.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="AboutDetail"
        component={AboutDetail}
        options={{
          headerTitle: 'Tentang',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer fallback={<SplashScreen />}>
      <HomeStackScreen />
    </NavigationContainer>
  );
}
