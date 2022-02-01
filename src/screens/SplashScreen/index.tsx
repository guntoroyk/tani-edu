import { Center, Image } from 'native-base';
import React from 'react';

export default function SplashScreen() {
  return (
    <Center flex={1} background="white">
      <Image
        source={require('../../assets/images/logo-tani-edu.png')}
        resizeMode="contain"
        size="xl"
        alt="logo tani edu"
      />
    </Center>
  );
}
