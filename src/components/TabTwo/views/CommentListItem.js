import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, } from 'react-native';


import { CommentListStyle as styles } from '../styles/';

import { TagBox } from '../../common/'


class CommentListItem extends PureComponent {
  render() {
    const { item, navigation, token } = this.props;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemBox}>
          <View style={styles.leftBox}>
            {
              item.replier_avatar && (
                <Image source={{ uri: item.replier_avatar }} style={styles.avatar}  />
              )
            }
          </View>
          <View style={styles.rightBox}>
            <View style={styles.topBox}>
              <Text style={styles.name}>{item.replier_name}</Text>
              <Text style={styles.time}>{item.created}</Text>
            </View>
            <View style={styles.midBox}>
              <Text style={styles.body}>{item.body}</Text>
            </View>
            <View style={styles.bottomBox}>
              <TagBox 
                comment={true} 
                item={item} 
                btnText={"回复"} 
                navigation={navigation}
                token={token}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default CommentListItem;