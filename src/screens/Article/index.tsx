import React from 'react';
import { Button, FlatList, VStack, Box } from 'native-base';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';
import { articles } from '../../data/articles';

export default function InfoTaniList() {
  const navigation = useNavigation();
  const categories = [
    'Semua',
    'paktanidigital.com',
    'mitrabertani.com',
    'neurafarm.com',
  ];
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

  const filteredArticles = articles.filter(article => {
    if (selectedCategory === 'Semua') {
      return true;
    }
    return article.category === selectedCategory;
  });

  return (
    <VStack
      flex={1}
      p={3}
      px={4}
      _light={{ backgroundColor: 'white' }}
      safeAreaTop
      space={2}>
      <Box>
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
      </Box>

      <FlatList
        data={filteredArticles}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => navigation.navigate('WebViewScreen', { item })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
