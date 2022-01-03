import React from 'react';
import {
  CheckIcon,
  FlatList,
  HStack,
  Image,
  Pressable,
  Select,
  Text,
  VStack,
} from 'native-base';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function CommodityPrice({ navigation }: any) {
  const [province, setProvince] = React.useState('5');
  const [city, setCity] = React.useState('1');

  const [priceList] = React.useState([
    {
      id: 1,
      name: 'Brokoli Brokoli Brokoli Brokoli Brokoli Brokoli Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 2,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 3,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 4,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 5,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 6,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 7,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 8,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 9,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 10,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 11,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
    {
      id: 12,
      name: 'Brokoli',
      image:
        'https://cdn-icons.flaticon.com/png/512/2347/premium/2347045.png?token=exp=1641172734~hmac=64dcf9df19c7c807c66ebae00d35596e',
      price: 'Rp28.500/kg',
    },
  ]);

  return (
    <VStack
      flex={1}
      p={3}
      px={4}
      _light={{ backgroundColor: 'white' }}
      safeAreaTop
      space={1}>
      <Select
        selectedValue={province}
        minWidth="200"
        accessibilityLabel="Provinsi"
        placeholder="Provinsi"
        _selectedItem={{
          bg: 'gray.300',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={itemValue => setProvince(itemValue)}>
        <Select.Item label="Banten" value="1" />
        <Select.Item label="DKI Jakarta" value="2" />
        <Select.Item label="D. I. Yogyakarta" value="3" />
        <Select.Item label="Jawa Barat" value="4" />
        <Select.Item label="Jawa Tengah" value="5" />
        <Select.Item label="Jawa Timur" value="6" />
      </Select>

      <Select
        selectedValue={city}
        minWidth="200"
        accessibilityLabel="Kota"
        placeholder="Kota"
        _selectedItem={{
          bg: 'gray.300',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={itemValue => setCity(itemValue)}>
        <Select.Item label="Klaten" value="1" />
        <Select.Item label="Boyolali" value="2" />
        <Select.Item label="Magelang" value="3" />
        <Select.Item label="Semarang" value="4" />
        <Select.Item label="Surakarta" value="5" />
        <Select.Item label="Cilacap" value="6" />
      </Select>

      <Text color="gray.400">Diperbarui pada tanggal 1 Januari 2022</Text>

      <FlatList
        mt={2}
        data={priceList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            px={2}
            borderBottomWidth={1}
            borderBottomColor="gray.200"
            onPress={() =>
              navigation.navigate('CommodityPriceDetail', { item })
            }
            _pressed={{ background: 'gray.300' }}>
            <HStack alignItems="center" my={1} py={2} space={4}>
              <Image source={{ uri: item.image }} alt="image" size={'xs'} />
              <Text
                color="green.700"
                fontSize="md"
                isTruncated
                noOfLines={1}
                maxWidth={screenWidth * 0.5}>
                {item.name}
              </Text>
              <Text color="green.700" fontSize="md" ml="auto">
                {item.price}
              </Text>
            </HStack>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
