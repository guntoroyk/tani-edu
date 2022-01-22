import React from 'react';
import WebView from 'react-native-webview';

export default function WebViewScreen({ route, navigation }) {
  const item = route.params.item;

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: item.title,
    });
  }, [item, navigation]);

  return (
    <WebView
      originWhitelist={['*']}
      source={{
        uri: item.url,
      }}
    />
  );
}
