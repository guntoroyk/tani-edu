import React from 'react';
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Pressable,
  Stack,
  Text,
} from 'native-base';

type CardItem = {
  id: number;
  title: string;
  image: string;
  description: string;
  author: string;
  category: string;
  createdAt: string;
};

const Card = ({ item }) => {
  return (
    <Pressable
      m={1}
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: 'gray.50',
      }}>
      <Box>
        <AspectRatio w="100%" ratio={16 / 8}>
          <Image
            source={{
              uri:
                item.image ||
                'https://images.unsplash.com/photo-1587740916136-2767ed09210a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=917&q=80',
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="green.500"
          _dark={{
            bg: 'green.400',
          }}
          _text={{
            color: 'warmGray.50',
            fontWeight: '700',
            fontSize: 'xs',
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
          borderTopRightRadius="sm">
          {item.category}
        </Center>
      </Box>
      <Stack px="4" py={3} space={2}>
        <Stack space={1}>
          <Heading size="md" ml="-1" isTruncated noOfLines={2}>
            {item.title}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: 'green.500',
            }}
            _dark={{
              color: 'green.400',
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1">
            {item.author}
          </Text>
        </Stack>
        <Text fontWeight="400" isTruncated noOfLines={3}>
          {item.description}
        </Text>
        <HStack alignItems="center" space={2} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              {item.createdAt}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Pressable>
  );
};

export default Card;
