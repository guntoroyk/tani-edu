import React from 'react';
import { Dimensions } from 'react-native';
import {
  Box,
  Text,
  HStack,
  VStack,
  IconButton,
  Icon,
  Center,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home({ navigation }: { navigation: any }) {
  const icons = [
    { name: 'newspaper', title: 'Info Tani', to: 'InfoTani' },
    { name: 'lightbulb-on-outline', title: 'Budidaya', to: 'Budidaya' },
    { name: 'currency-usd', title: 'Cek Harga', to: 'CekHarga' },
    {
      name: 'calculator-variant',
      title: 'Kalkulator Pupuk',
      to: 'KalkulatorPupuk',
    },
    {
      name: 'calculator',
      title: 'Kalkulator Bibit',
      to: 'KalkulatorBibit',
    },
  ];

  return (
    <VStack
      flex={1}
      p={3}
      _light={{ backgroundColor: 'white' }}
      safeAreaTop
      space={2}>
      <Box
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center">
        {icons.map((icon, i) => (
          <Center
            key={i}
            m={4}
            width={Dimensions.get('window').width / 2 - 120}>
            <IconButton
              key={i}
              onPress={() => navigation.navigate(icon.to)}
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
    </VStack>
  );
}
