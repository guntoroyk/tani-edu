import React from 'react';
import { HStack, Pressable, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function About() {
  const navigation = useNavigation();

  return (
    <VStack
      flex={1}
      p={3}
      px={4}
      _light={{ backgroundColor: 'white' }}
      safeAreaTop
      space={1}>
      <Pressable
        px={2}
        borderBottomWidth={1}
        borderBottomColor="gray.200"
        _pressed={{ background: 'gray.300' }}>
        <HStack alignItems="center" my={1} py={2} space={4}>
          <Text color="green.700" fontSize="md">
            Versi (1.0.0)
          </Text>
        </HStack>
      </Pressable>
      <Pressable
        px={2}
        borderBottomWidth={1}
        borderBottomColor="gray.200"
        onPress={() => navigation.navigate('AboutDetail')}
        _pressed={{ background: 'gray.300' }}>
        <HStack alignItems="center" my={1} py={2} space={4}>
          <Text color="green.700" fontSize="md">
            Tentang
          </Text>
        </HStack>
      </Pressable>
    </VStack>
  );
}
