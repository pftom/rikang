import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import PhotoBrowser from 'react-native-photo-browser';


class ImageView extends PureComponent {

  render() {
    const { navigation } = this.props;
    const { media } = navigation.state.params;

    return (
      <PhotoBrowser
        onBack={() => { navigation.goBack() }}
        mediaList={media}
      />
    )
  }
}

export default ImageView;