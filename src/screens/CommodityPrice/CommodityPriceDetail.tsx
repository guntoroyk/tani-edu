/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  CheckIcon,
  Select,
  VStack,
  Text,
  HStack,
  Heading,
  Box,
  FlatList,
  Button,
} from 'native-base';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function CommodityPriceDetail({ navigation, route }) {
  const [province, setProvince] = React.useState('5');
  const [city, setCity] = React.useState('1');

  const filters = ['1 Minggu', '1 Bulan', '3 Bulan', '1 Tahun'];
  const [selectedFilter, setSelectedFilter] = React.useState(filters[0]);

  const { item } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: item.name,
    });
  }, [item.name, navigation]);

  return (
    <VStack
      flex={1}
      // minHeight={screenHeight}
      p={3}
      px={4}
      // alignItems="center"
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

      <HStack ml="auto" mt={4} mb={2}>
        <VStack>
          <Heading textAlign="right">Rp28.600</Heading>
          <Text color="gray.400" textAlign="right">
            +100 dibanding minggu lalu
          </Text>
        </VStack>
        <Box width={5} ml={2} background="green.500" />
      </HStack>

      <LineChart
        data={{
          labels: ['28 Des', '29 Des', '30 Des', '31 Des', '1 Jan', '2 Jan'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={screenWidth * 0.91} // from react-native
        height={220}
        yAxisLabel="Rp"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#22c55e',
          backgroundGradientFrom: '#16a34a',
          backgroundGradientTo: '#4ade80',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#16a34a',
          },
        }}
        bezier
        style={{
          marginLeft: 'auto',
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      <HStack mb={2}>
        <FlatList
          flex={1}
          data={filters}
          renderItem={({ item }) => (
            <Button
              variant={item === selectedFilter ? 'solid' : 'outline'}
              m={1}
              colorScheme="green"
              onPress={() => setSelectedFilter(item)}>
              {item}
            </Button>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </HStack>
    </VStack>
  );
}
