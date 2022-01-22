import React from 'react';
import {
  VStack,
  Heading,
  ScrollView,
  HStack,
  Button,
  Input,
  Icon,
  Text,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menus from './components/Menus';
import Article from './components/Article';
import Video from './components/Video';

export default function Home({ navigation }: any) {
  return (
    <ScrollView>
      <VStack
        flex={1}
        p={3}
        px={4}
        _light={{ backgroundColor: 'white' }}
        safeAreaTop
        space={2}>
        <Input
          placeholder="Cari pertanian organik, tips budidaya, atau lainnya.."
          variant="filled"
          width="100%"
          bg="gray.100"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          _focus={{ borderColor: 'green.500', borderWidth: 1 }}
          borderWidth="1"
          // borderColor="green.500"
          onFocus={() => navigation.navigate('Search')}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="green.500"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
        <Menus />

        <VStack mt={2}>
          <HStack alignItems="center" justifyContent="space-between">
            <Heading size="md">Kategori Bacaan</Heading>
            <Button
              variant="link"
              colorScheme="success"
              mr={-3}
              onPress={() => navigation.navigate('Article')}>
              Lihat semua
            </Button>
          </HStack>
          <Text>
            Pilih bacaan menarik tentang berbagai hal di dunia pertanian
          </Text>
        </VStack>
        <Article />

        <VStack mt={2}>
          <HStack alignItems="center" justifyContent="space-between">
            <Heading size="md">Video Pertanian</Heading>
            <Button
              variant="link"
              colorScheme="success"
              mr={-3}
              onPress={() => navigation.navigate('Video')}>
              Lihat semua
            </Button>
          </HStack>
          <Text>
            Tonton berbagai video menarik dan insipiratif di dunia pertanian
          </Text>
        </VStack>
        <Video />
      </VStack>
    </ScrollView>
  );
}
