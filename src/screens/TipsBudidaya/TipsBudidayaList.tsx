import React from 'react';
import { Button, FlatList, VStack } from 'native-base';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';

const fakeList = [
  {
    id: 1,
    title:
      'Cara menghadapi Bolting, Fenomena yang Membuat Petani Sayur Kebingungan',
    author: 'Neurafarm',
    category: 'Budidaya',
    image: '',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium iusto temporibus odit molestiae animi est ipsa cumque magnam illo provident asperiores, at deleniti praesentium, aut necessitatibus ex. Asperiores, at repudiandae?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto temporibus odit molestiae animi est ipsa cumque magnam illo provident asperiores, at deleniti praesentium, aut necessitatibus ex. Asperiores, at repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto temporibus odit molestiae animi est ipsa cumque magnam illo provident asperiores, at deleniti praesentium, aut necessitatibus ex. Asperiores, at repudiandae?',
    createdAt: new Date().toDateString(),
  },
  {
    id: 2,
    title: 'Cara Menaman Padi dengan teknik Hidroponik',
    author: 'Neurafarm',
    category: 'Budidaya',
    image: 'https://wallpaperaccess.com/full/317501.jpg',
    description:
      'Akhir-akhir ini, bisnis di bidang pertanian semakin banyak dilirik orang, seperti bisnis tanaman hias, budidaya sayuran dengan hidroponik, budidaya herba, atau budidaya jenis tanaman lainnya. Apabila dijalankan dengan baik, bisnis di bidang budidaya tanaman memang cukup menguntungkan. Namun, bagaimana jika tidak memiliki lahan untuk digarap? Berikut beberapa ide bisnis lain di bidang pertanian, yang dapat Sobat Tania lakukan.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto temporibus odit molestiae animi est ipsa cumque magnam illo provident asperiores, at deleniti praesentium, aut necessitatibus ex. Asperiores, at repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto temporibus odit molestiae animi est ipsa cumque magnam illo provident asperiores, at deleniti praesentium, aut necessitatibus ex. Asperiores, at repudiandae?',
    createdAt: new Date().toDateString(),
  },
];

export default function TipsBudidayaList() {
  const navigation = useNavigation();
  const categories = ['Sayuran', 'Hidroponik', 'Tanaman'];
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

  return (
    <VStack
      flex={1}
      p={3}
      px={4}
      _light={{ backgroundColor: 'white' }}
      safeAreaTop
      space={2}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Button
            variant={item === selectedCategory ? 'solid' : 'outline'}
            m={1}
            colorScheme="green"
            onPress={() => setSelectedCategory(item)}>
            {item}
          </Button>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={fakeList}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => navigation.navigate('TipsBudidayaDetail', { item })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
