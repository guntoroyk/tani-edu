import React from 'react';
import { FlatList } from 'native-base';
import Card from '../../../components/Card';

export default function TipsBudidaya() {
  return (
    <FlatList
      data={[
        {
          id: 1,
          title:
            'Mengenal Bolting, Fenomena yang Membuat Petani Sayur Kebingungan',
          author: 'Neurafarm',
          category: 'Budidaya',
          image: '',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium iusto temporibus odit molestiae animi est ipsa cumque magnam illo provident asperiores, at deleniti praesentium, aut necessitatibus ex. Asperiores, at repudiandae?',
          createdAt: new Date().toDateString(),
        },
        {
          id: 2,
          title:
            'Alternatif Ide Bisnis di Bidang Pertanian yang Bisa Kamu Coba',
          author: 'Neurafarm',
          category: 'Budidaya',
          image: 'https://wallpaperaccess.com/full/317501.jpg',
          description:
            'Akhir-akhir ini, bisnis di bidang pertanian semakin banyak dilirik orang, seperti bisnis tanaman hias, budidaya sayuran dengan hidroponik, budidaya herba, atau budidaya jenis tanaman lainnya. Apabila dijalankan dengan baik, bisnis di bidang budidaya tanaman memang cukup menguntungkan. Namun, bagaimana jika tidak memiliki lahan untuk digarap? Berikut beberapa ide bisnis lain di bidang pertanian, yang dapat Sobat Tania lakukan.',
          createdAt: new Date().toDateString(),
        },
      ]}
      renderItem={({ item }) => <Card item={item} horizontal />}
      keyExtractor={item => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
