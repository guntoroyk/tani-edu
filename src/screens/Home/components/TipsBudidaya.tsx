import React from 'react';
import { FlatList } from 'native-base';
import Card from '../../../components/Card';
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

export default function TipsBudidaya() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={fakeList}
      renderItem={({ item }) => (
        <Card
          item={item}
          horizontal
          onPress={() => navigation.navigate('TipsBudidayaDetail', { item })}
        />
      )}
      keyExtractor={item => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
