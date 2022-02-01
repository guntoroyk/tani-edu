import React from 'react';
import { Button, FlatList, VStack, Box } from 'native-base';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';
import { videos } from '../../data/videos';

export default function VideoList() {
  const navigation = useNavigation();
  const categories = ['Semua', 'Mitra Bertani TV'];
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

  const filteredVideos = videos.filter(video => {
    if (selectedCategory === 'Semua') {
      return true;
    }
    return video.category === selectedCategory;
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
        data={filteredVideos}
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
