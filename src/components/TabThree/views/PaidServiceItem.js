import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import { ServiceStyle as styles } from '../styles/';

class PaidServiceItem extends PureComponent {

  render() {
    const { item, navigation } = this.props;

    return (
      <Text>hhh</Text>
    )
  }

}

/*
<TouchableOpacity onPress={() => { console.log('hhh') }}>
        <View style={styles.serviceBox}>
          <View style={styles.avatarBox}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
          </View>
          <View style={styles.messageBox}>
            <View style={styles.nameBox}>
              <Text style={styles.name}>{item.name}</Text>
              
              <View></View>

              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
          </View>
        </View>
      </TouchableOpacity>

*/

export default PaidServiceItem;