import React from 'react';
import { Button, FlatList, VStack } from 'native-base';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';

const fakeList = [
  {
    id: 1,
    title: 'Mengenal Berbagai Jenis Bayam',
    author: 'Guntoro Yudhy',
    category: 'Info Tani',
    image:
      'https://images.unsplash.com/flagged/photo-1601316587579-187125db32c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium iusto temporibus odit molestiae animi est ipsa cumque magnam illo provident asperiores, at deleniti praesentium, aut necessitatibus ex. Asperiores, at repudiandae?',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto temporibus odit molestiae animi est ipsa cumque magnam illo provident asperiores, at deleniti praesentium, aut necessitatibus ex. Asperiores, at repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto temporibus odit molestiae animi est ipsa cumque magnam illo provident asperiores, at deleniti praesentium, aut necessitatibus ex. Asperiores, at repudiandae?',
    createdAt: new Date().toDateString(),
  },
  {
    id: 2,
    title: 'Alternatif Ide Bisnis di Bidang Pertanian yang Bisa Kamu Coba',
    author: 'Neurafarm',
    category: 'Info Tani',
    image:
      'https://images.unsplash.com/flagged/photo-1601316587579-187125db32c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    description:
      'Akhir-akhir ini, bisnis di bidang pertanian semakin banyak dilirik orang, seperti bisnis tanaman hias, budidaya sayuran dengan hidroponik, budidaya herba, atau budidaya jenis tanaman lainnya. Apabila dijalankan dengan baik, bisnis di bidang budidaya tanaman memang cukup menguntungkan. Namun, bagaimana jika tidak memiliki lahan untuk digarap? Berikut beberapa ide bisnis lain di bidang pertanian, yang dapat Sobat Tania lakukan.',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    createdAt: new Date().toDateString(),
  },
  {
    id: 3,
    title: 'Alternatif Ide Bisnis di Bidang Pertanian yang Bisa Kamu Coba',
    author: 'Neurafarm',
    category: 'Info Tani',
    image:
      'https://images.unsplash.com/flagged/photo-1601316587579-187125db32c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    description:
      'Akhir-akhir ini, bisnis di bidang pertanian semakin banyak dilirik orang, seperti bisnis tanaman hias, budidaya sayuran dengan hidroponik, budidaya herba, atau budidaya jenis tanaman lainnya. Apabila dijalankan dengan baik, bisnis di bidang budidaya tanaman memang cukup menguntungkan. Namun, bagaimana jika tidak memiliki lahan untuk digarap? Berikut beberapa ide bisnis lain di bidang pertanian, yang dapat Sobat Tania lakukan.',
    body: 'Akhir-akhir ini, bisnis di bidang pertanian semakin banyak dilirik orang, seperti bisnis tanaman hias, budidaya sayuran dengan hidroponik, budidaya herba, atau budidaya jenis tanaman lainnya. Apabila dijalankan dengan baik, bisnis di bidang budidaya tanaman memang cukup menguntungkan. Namun, bagaimana jika tidak memiliki lahan untuk digarap? Berikut beberapa ide bisnis lain di bidang pertanian, yang dapat Sobat Tania lakukan.',
    createdAt: new Date().toDateString(),
  },
  {
    id: 4,
    title: 'Alternatif Ide Bisnis di Bidang Pertanian yang Bisa Kamu Coba',
    author: 'Neurafarm',
    category: 'Info Tani',
    image:
      'https://images.unsplash.com/flagged/photo-1601316587579-187125db32c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    description:
      'Akhir-akhir ini, bisnis di bidang pertanian semakin banyak dilirik orang, seperti bisnis tanaman hias, budidaya sayuran dengan hidroponik, budidaya herba, atau budidaya jenis tanaman lainnya. Apabila dijalankan dengan baik, bisnis di bidang budidaya tanaman memang cukup menguntungkan. Namun, bagaimana jika tidak memiliki lahan untuk digarap? Berikut beberapa ide bisnis lain di bidang pertanian, yang dapat Sobat Tania lakukan.',
    body: 'Akhir-akhir ini, bisnis di bidang pertanian semakin banyak dilirik orang, seperti bisnis tanaman hias, budidaya sayuran dengan hidroponik, budidaya herba, atau budidaya jenis tanaman lainnya. Apabila dijalankan dengan baik, bisnis di bidang budidaya tanaman memang cukup menguntungkan. Namun, bagaimana jika tidak memiliki lahan untuk digarap? Berikut beberapa ide bisnis lain di bidang pertanian, yang dapat Sobat Tania lakukan.',
    createdAt: new Date().toDateString(),
  },
];

export default function InfoTaniList() {
  const navigation = useNavigation();
  const categories = [
    'Teknologi Pertanian',
    'Hama & Tanaman',
    'Kebijakan Pertanian',
  ];
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
            onPress={() => navigation.navigate('InfoTaniDetail', { item })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
