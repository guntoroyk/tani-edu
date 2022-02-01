import React from 'react';
import { FlatList } from 'native-base';
import Card from '../../../components/Card';
import { useNavigation } from '@react-navigation/native';
import { videos } from '../../../data/videos';

export default function TipsBudidaya() {
  const navigation = useNavigation();

  const fiveVideos = videos.slice(0, 5);

  return (
    <FlatList
      data={fiveVideos}
      renderItem={({ item }) => (
        <Card
          item={item}
          horizontal
          onPress={() => navigation.navigate('WebViewScreen', { item })}
        />
      )}
      keyExtractor={item => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
