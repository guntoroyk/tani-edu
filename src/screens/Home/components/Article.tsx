import React from 'react';
import { FlatList } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Card from '../../../components/Card';
import { articles } from '../../../data/articles';

export default function InfoTani() {
  const navigation = useNavigation();

  const fiveArticles = articles.slice(0, 5);

  return (
    <FlatList
      data={fiveArticles}
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
