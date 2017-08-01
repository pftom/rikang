import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, } from 'react-native';


import { CommentListStyle as styles } from '../styles/';

import {
  handleAnswers,
  getBeRepliedName,
} from '../data/';


import { TagBox } from '../../common/'

export const handleTime = (time) => {
  let afterTime = '';
  afterTime += time.slice(0, 10);
  // for more exact time show
  // afterTime += ' ';
  // afterTime += time.slice(11, 19);
  return afterTime;
}


class CommentListItem extends PureComponent {
  render() {
    const { item, navigation, token, commentListSeq } = this.props;
    const { userId } = navigation.state.params;

    let name = null;
    if (item.reply_to) {
      name = getBeRepliedName(commentListSeq, item.reply_to);
    }

    let isMine = false;
    if (userId === item.replier_uid) {
      isMine = true;
    }

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
              <Text style={styles.time}>{handleTime(item.created)}</Text>
            </View>
            <View style={styles.midBox}>
              <Text style={styles.body}>
                <Text style={styles.atBody}>
                  { name && `@${name} ` }
                </Text>
                {item.body}
              </Text>
            </View>
            <View style={styles.bottomBox}>
              <TagBox 
                comment={true} 
                item={item} 
                isMine={true}
                btnText={"回复"}
                handleAnswerBtn={this.props.handleAnswerBtn}
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