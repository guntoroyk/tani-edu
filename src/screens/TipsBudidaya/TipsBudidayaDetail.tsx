/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  VStack,
  Text,
  Button,
  HStack,
  AspectRatio,
  Image,
  Heading,
} from 'native-base';

export default function TipsBudidayaDetail({ navigation, route }) {
  const { item } = route.params;

  console.log('item', item);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: item?.title,
    });
  }, [item.title, navigation]);

  return (
    <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
      <VStack
        flex={1}
        p={3}
        px={4}
        _light={{ backgroundColor: 'white' }}
        safeAreaTop
        space={2}>
        <HStack space={2}>
          <Button variant="solid" colorScheme="green" size="sm" disabled>
            Budidaya
          </Button>
          <Button variant="solid" colorScheme="green" size="sm" disabled>
            Teknologi Pertanian
          </Button>
        </HStack>
        <Heading mt={2}>{item?.title}</Heading>
        <Text mt={-1} color="gray.500">
          {item?.author} - {item?.createdAt}
        </Text>
        {item.image ? (
          <AspectRatio mt={3} w="100%" ratio={16 / 9}>
            <Image
              rounded="lg"
              source={{
                uri: item?.image,
              }}
              alt="image"
            />
          </AspectRatio>
        ) : null}
        <Text mt={2}>{item?.body}</Text>
      </VStack>
    </ScrollView>
  );
}
