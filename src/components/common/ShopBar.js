import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class ShopBar extends PureComponent {

  render() {
    return (
      <TouchableOpacity onPress={() => { console.log('hhh') }}>
        <View>
          <Text>在线咨询</Text>
        </View>
      </TouchableOpacity>
    )
  }
}