import React from 'react';
import { VStack, Heading, ScrollView, HStack, Button } from 'native-base';
import Menus from './components/Menus';
import InfoTani from './components/InfoTani';
import TipsBudidaya from './components/TipsBudidaya';

export default function Home() {
  return (
    <ScrollView>
      <VStack
        flex={1}
        p={3}
        px={4}
        _light={{ backgroundColor: 'white' }}
        safeAreaTop
        space={2}>
        <Menus />

        <HStack mt={2} alignItems="center" justifyContent="space-between">
          <Heading size="md">Info Tani</Heading>
          <Button variant="link" colorScheme="success" mr={-3}>
            Lihat semua
          </Button>
        </HStack>
        <InfoTani />

        <HStack mt={2} alignItems="center" justifyContent="space-between">
          <Heading size="md">Tips Budidaya</Heading>
          <Button variant="link" colorScheme="success" mr={-3}>
            Lihat semua
          </Button>
        </HStack>
        <TipsBudidaya />
      </VStack>
    </ScrollView>
  );
}
