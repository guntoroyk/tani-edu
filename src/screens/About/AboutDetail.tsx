import React from 'react';
import { HStack, Image, Text, VStack } from 'native-base';

export default function AboutDetail() {
  return (
    <VStack
      flex={1}
      p={3}
      px={4}
      _light={{ backgroundColor: 'white' }}
      safeAreaTop
      space={1}>
      <Text>
        <Text color="green.500" fontSize={16} bold>
          TaniEDU
        </Text>{' '}
        adalah sebuah aplikasi yang menyediakan sumber edukasi tentang dunia
        pertanian berupa artikel dan video. Konten-konten pada aplikasi ini
        diambil dari berbagai sumber seperti paktanidigital.com,
        mitrabertani.com, dan neurafarm.com, dpkp.jogjaprov.go.id, dan channel
        YouTube Mitra Bertani TV.
      </Text>
      <Text>
        Aplikasi ini dibuat oleh{' '}
        <Text color="green.500" fontSize={16} bold>
          Tim KKN-PPM UGM
        </Text>{' '}
        yang dikerjakan pada saat pelaksanaan KKN periode 4 yaitu tanggal 18
        Desember 2021 hingga 5 Februari 2022 di Dukuh Sendangarum, Kecamatan
        Minggir, Kabupaten Sleman, Provinsi Yogyakarta.
      </Text>
      <Text>
        Untuk saran dan masukan dapat menghubungi Guntoro Yudhy Kusuma melalui
        email:{' '}
        <Text color="green.500" fontSize={16} bold>
          guntoro.y.k [at] mail.ugm.ac.id
        </Text>
        .
      </Text>
      <VStack space={2} alignItems="center" mt="auto" mb={6}>
        <HStack space={2} justifyContent="center">
          <Image
            source={require('../../assets/images/logo-ugm.png')}
            resizeMode="contain"
            size="sm"
            alt="logo tani edu"
          />
          <Image
            source={require('../../assets/images/logo-kkn-ugm.png')}
            resizeMode="contain"
            size="sm"
            alt="logo tani edu"
          />
          <Image
            source={require('../../assets/images/logo-kkn-minggir.png')}
            resizeMode="contain"
            size="sm"
            alt="logo tani edu"
          />
        </HStack>
        <Text color="gray.500" fontSize={16}>
          KKN-PPM UGM Periode 4 tahun 2021
        </Text>
        <Text color="gray.500" fontSize={14}>
          Minggir, Sleman, Yogyakarta
        </Text>
      </VStack>
    </VStack>
  );
}
