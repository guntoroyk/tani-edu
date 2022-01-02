import React from 'react';
import { FlatList } from 'native-base';
import Card from '../../../components/Card';

export default function InfoTani() {
  return (
    <FlatList
      data={[
        {
          id: 1,
          title: 'Mengenal Berbagai Jenis Bayam',
          author: 'Guntoro Yudhy',
          category: 'Info Tani',
          image:
            'https://images.unsplash.com/flagged/photo-1601316587579-187125db32c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium iusto temporibus odit molestiae animi est ipsa cumque magnam illo provident asperiores, at deleniti praesentium, aut necessitatibus ex. Asperiores, at repudiandae?',
          createdAt: new Date().toDateString(),
        },
        {
          id: 2,
          title:
            'Alternatif Ide Bisnis di Bidang Pertanian yang Bisa Kamu Coba',
          author: 'Neurafarm',
          category: 'Info Tani',
          image:
            'https://images.unsplash.com/flagged/photo-1601316587579-187125db32c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          description:
            'Akhir-akhir ini, bisnis di bidang pertanian semakin banyak dilirik orang, seperti bisnis tanaman hias, budidaya sayuran dengan hidroponik, budidaya herba, atau budidaya jenis tanaman lainnya. Apabila dijalankan dengan baik, bisnis di bidang budidaya tanaman memang cukup menguntungkan. Namun, bagaimana jika tidak memiliki lahan untuk digarap? Berikut beberapa ide bisnis lain di bidang pertanian, yang dapat Sobat Tania lakukan.',
          createdAt: new Date().toDateString(),
        },
        {
          id: 3,
          title:
            'Alternatif Ide Bisnis di Bidang Pertanian yang Bisa Kamu Coba',
          author: 'Neurafarm',
          category: 'Info Tani',
          image:
            'https://images.unsplash.com/flagged/photo-1601316587579-187125db32c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          description:
            'Akhir-akhir ini, bisnis di bidang pertanian semakin banyak dilirik orang, seperti bisnis tanaman hias, budidaya sayuran dengan hidroponik, budidaya herba, atau budidaya jenis tanaman lainnya. Apabila dijalankan dengan baik, bisnis di bidang budidaya tanaman memang cukup menguntungkan. Namun, bagaimana jika tidak memiliki lahan untuk digarap? Berikut beberapa ide bisnis lain di bidang pertanian, yang dapat Sobat Tania lakukan.',
          createdAt: new Date().toDateString(),
        },
        {
          id: 4,
          title:
            'Alternatif Ide Bisnis di Bidang Pertanian yang Bisa Kamu Coba',
          author: 'Neurafarm',
          category: 'Info Tani',
          image:
            'https://images.unsplash.com/flagged/photo-1601316587579-187125db32c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          description:
            'Akhir-akhir ini, bisnis di bidang pertanian semakin banyak dilirik orang, seperti bisnis tanaman hias, budidaya sayuran dengan hidroponik, budidaya herba, atau budidaya jenis tanaman lainnya. Apabila dijalankan dengan baik, bisnis di bidang budidaya tanaman memang cukup menguntungkan. Namun, bagaimana jika tidak memiliki lahan untuk digarap? Berikut beberapa ide bisnis lain di bidang pertanian, yang dapat Sobat Tania lakukan.',
          createdAt: new Date().toDateString(),
        },
      ]}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={item => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
