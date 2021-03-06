import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Center, Icon, IconButton, Text } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';

export default function Menus() {
  const icons = [
    {
      name: 'newspaper',
      title: 'Info Tani',
      to: 'WebViewScreen',
      param: {
        url: 'https://paktanidigital.com/artikel/category/info/berita-pertanian',
        title: 'Info Tani',
      },
    },
    {
      name: 'lightbulb-on-outline',
      title: 'Inspirasi',
      to: 'WebViewScreen',
      param: {
        url: 'https://paktanidigital.com/artikel/category/tips',
        title: 'Inspirasi & Tips',
      },
    },
    { name: 'currency-usd', title: 'Info Harga', to: 'CommodityPrice' },
    // {
    //   name: 'calculator-variant',
    //   title: 'Kalkulator Pupuk',
    //   to: 'FertilizerCalc',
    // },
    // {
    //   name: 'calculator',
    //   title: 'Kalkulator Bibit',
    //   to: 'SeedCalc',
    // },
    // {
    //   name: 'calculator',
    //   title: 'Cari Artikel',
    //   to: 'SearchScreen',
    // },
    {
      name: 'book-open-outline',
      title: 'Bacaan',
      to: 'Article',
    },
    {
      name: 'play',
      title: 'Video Pertanian',
      to: 'Video',
    },
  ];

  const navigation = useNavigation();

  return (
    <Box
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center">
      {icons.map((icon, i) => (
        <Center key={i} m={4} width={Dimensions.get('window').width / 2 - 120}>
          <IconButton
            key={i}
            onPress={() => navigation.navigate(icon.to, { item: icon.param })}
            borderRadius="full"
            bg="green.500"
            variant="solid"
            p="4"
            icon={
              <Icon
                color="white"
                name={icon.name}
                as={MaterialCommunityIcons}
                size="md"
              />
            }
          />
          <Text mt={2} fontSize="sm" textAlign="center" noOfLines={2}>
            {icon.title}
          </Text>
        </Center>
      ))}
      <Center
        m={4}
        background="white"
        width={Dimensions.get('window').width / 2 - 120}>
        <IconButton
          borderRadius="full"
          bg="blue.500"
          variant="solid"
          p="4"
          background="white"
        />
      </Center>
    </Box>
  );
}
