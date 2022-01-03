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

export default function FertilizerCalc() {
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

        <HStack space={2} mt={2}>
          <FormControl flex={1} isInvalid={false}>
            <FormControl.Label>Nitrogren (N)</FormControl.Label>
            <Select
              accessibilityLabel="Nitrogen"
              placeholder="Nitrogen"
              color="green.500"
              fontSize="md"
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
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              // onValueChange={itemValue =>
              //   formik.setFieldValue('overtimeHour', itemValue)
              // }
            >
              <Select.Item label="Urea" value="0" />
              <Select.Item label="P121" value="1" />
              <Select.Item label="LK22" value="2" />
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl flex={1}>
            <FormControl.Label>Fosfor (P)</FormControl.Label>
            <Select
              accessibilityLabel="Fosfor"
              placeholder="Fosfor"
              color="green.500"
              fontSize="md"
              dropdownIcon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="chevron-down"
                  color="green.500"
                  size={7}
                />
              }
              _selectedItem={{
                bg: 'gray.400',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              // onValueChange={itemValue =>
              //   formik.setFieldValue('overtimeMinute', itemValue)
              // }
            >
              <Select.Item label="SP36" value="0" />
              <Select.Item label="SP37" value="30" />
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl flex={1}>
            <FormControl.Label>Kalium (K)</FormControl.Label>
            <Select
              accessibilityLabel="Kalium"
              placeholder="Kalium"
              color="green.500"
              fontSize="md"
              dropdownIcon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="chevron-down"
                  color="green.500"
                  size={7}
                />
              }
              _selectedItem={{
                bg: 'gray.400',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              // onValueChange={itemValue =>
              //   formik.setFieldValue('overtimeMinute', itemValue)
              // }
            >
              <Select.Item label="Urea" value="0" />
              <Select.Item label="LI78" value="30" />
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>
        </HStack>

        <Button colorScheme="success" mt="auto">
          Hitung
        </Button>
      </VStack>
    </ScrollView>
  );
}
