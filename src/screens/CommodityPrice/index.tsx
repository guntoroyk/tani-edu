import React from 'react';
import WebView from 'react-native-webview';

export default function CommodityPrice() {
  return (
    <WebView
      originWhitelist={['*']}
      source={{
        uri: 'https://dpkp.jogjaprov.go.id/harga-pangan/list',
      }}
    />
  );
}
