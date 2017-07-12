import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//import style
import { MainScreenStyle as styles } from '../../styles/TabOneStyle';

class PostSection extends PureComponent {

  render() {
    const { healthPostItem } = this.props;
    return (
      <View style={styles.postBox}>
        <View style={styles.postImgBox}>
          <Image source={healthPostItem.img} style={styles.postImg} />
        </View>
        <View style={styles.postContent}>
          <Text style={styles.postTitle}>{healthPostItem.title}</Text>
          <Text style={styles.postTime}>{healthPostItem.time}</Text>
        </View>
      </View>
    )
  }
}


export default PostSection;