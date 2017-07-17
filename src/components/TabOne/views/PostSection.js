import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//import style
import { MainScreenStyle as styles } from '../../styles/TabOneStyle';


class PostSection extends PureComponent {

  render() {
    const { healthPostItem, navigation, token } = this.props;
    let { title } = healthPostItem;
    if (title && title.length >= 30) {
      title = title.slice(0, 30);
      title += '...';
    }

    return (
      <TouchableOpacity onPress={() => { navigation.navigate('PostDetail', { token, id: healthPostItem.key })}}>
        <View style={styles.postBox}>
          <View style={styles.postImgBox}>
            { healthPostItem.img && <Image source={{ uri: healthPostItem.photo }} style={styles.postImg} /> }
          </View>
          <View style={styles.postContent}>
            <Text style={styles.postTitle}>{title}</Text>
            <Text style={styles.postTime}>{healthPostItem.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}


export default PostSection;