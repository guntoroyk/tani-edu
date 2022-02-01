import React from 'react';
import WebView from 'react-native-webview';

export default function Search() {
  return (
    <WebView
      originWhitelist={['*']}
      source={{
        html: `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>TaniEDU</title>
        </head>
        
        <body>
          <div>
            <script async src="https://cse.google.com/cse.js?cx=d43a3e87f6fd14544"></script>
            <div class="gcse-search"></div>
          </div>
        </body>
        
        </html>
        `,
      }}
    />
  );
}
