/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  CheckIcon,
  FormControl,
  Select,
  VStack,
  WarningOutlineIcon,
  Icon,
  HStack,
  Input,
  Button,
  ScrollView,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SeedCalc() {
  return (
    <ScrollView
      _light={{ backgroundColor: 'white' }}
      minHeight="100%"
      contentContainerStyle={{ flex: 1 }}>
      <VStack
        flex={1}
        px={4}
        pt={3}
        pb={6}
        _light={{ backgroundColor: 'white' }}
        safeAreaTop
        space={2}>
        <FormControl isInvalid={false}>
          <FormControl.Label>Tanaman</FormControl.Label>
          <Select
            minWidth="200"
            accessibilityLabel="Tanaman"
            placeholder="Tanaman"
            color="green.500"
            fontSize="md"
            selectedValue="1"
            dropdownIcon={
              <Icon
                as={MaterialCommunityIcons}
                name="chevron-down"
                color="green.500"
                size={7}
              />
            }
            _selectedItem={{
              bg: 'gray.300',
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1">
            <Select.Item label="Padi" value="1" color="green.500" />
            <Select.Item label="Jagung" value="2" />
            <Select.Item label="Cabe" value="3" />
            <Select.Item label="Bayam" value="4" />
            <Select.Item label="Kacang Hijau" value="5" />
          </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={false}>
          <FormControl.Label>Luas Lahan</FormControl.Label>
          <HStack space={1} justifyContent="space-between" alignItems="center">
            <Input
              placeholder="Luas lahan"
              value="0.0"
              color="green.500"
              fontSize="md"
              w="60%"
              height={47}
              _focus={{
                borderColor: 'green.500',
              }}
            />
            <Select
              w="38%"
              accessibilityLabel="Satuan"
              placeholder="Satuan"
              color="green.500"
              fontSize="md"
              selectedValue="1"
              dropdownIcon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="chevron-down"
                  color="green.500"
                  size={7}
                />
              }
              _selectedItem={{
                bg: 'gray.300',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Hektar" value="1" color="green.500" />
              <Select.Item label="Meter" value="2" />
            </Select>
          </HStack>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={false}>
          <FormControl.Label>Pola Tanam</FormControl.Label>
          <Select
            minWidth="200"
            accessibilityLabel="Pola Tanam"
            placeholder="Pola Tanam"
            color="green.500"
            fontSize="md"
            selectedValue="1"
            dropdownIcon={
              <Icon
                as={MaterialCommunityIcons}
                name="chevron-down"
                color="green.500"
                size={7}
              />
            }
            _selectedItem={{
              bg: 'gray.300',
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1">
            <Select.Item label="Persegi" value="1" color="green.500" />
            <Select.Item label="Zig Zag" value="2" />
          </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={false}>
          <FormControl.Label>Jarak Tanam</FormControl.Label>
          <HStack space={1} justifyContent="space-between" alignItems="center">
            <Input
              placeholder="Jarak Tanam"
              value="0.0"
              color="green.500"
              fontSize="md"
              w="60%"
              height={47}
              _focus={{
                borderColor: 'green.500',
              }}
            />
            <Select
              w="38%"
              accessibilityLabel="Satuan"
              placeholder="Satuan"
              color="green.500"
              fontSize="md"
              selectedValue="2"
              dropdownIcon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="chevron-down"
                  color="green.500"
                  size={7}
                />
              }
              _selectedItem={{
                bg: 'gray.300',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Hektar" value="1" color="green.500" />
              <Select.Item label="Meter" value="2" />
            </Select>
          </HStack>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={false}>
          <FormControl.Label>Cadangan (%)</FormControl.Label>
          <Input
            placeholder="Cadangan"
            value="0"
            color="green.500"
            fontSize="md"
            isFullWidth
            height={47}
            _focus={{
              borderColor: 'green.500',
            }}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={false}>
          <FormControl.Label>Daya Tumbuh (%)</FormControl.Label>
          <Input
            placeholder="Daya Tumbuh"
            value="0"
            color="green.500"
            fontSize="md"
            isFullWidth
            height={47}
            _focus={{
              borderColor: 'green.500',
            }}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
        </FormControl>

        <Button colorScheme="success" mt="auto">
          Hitung
        </Button>
      </VStack>
    </ScrollView>
  );
}
