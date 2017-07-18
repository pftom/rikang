import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';



//import style
import { QuestionListStyle as styles } from '../TabTwo/styles/';


class TagBox extends PureComponent {
  
  render() {
    const { navigation, token, item } = this.props;

    //get judge condition
    const { star, help, comment, btnText } = this.props;

    const mapImg = star ? require('./img/plus.png') : require('./img/leftArrow.png');

    return (
      <View style={styles.tagBox}>
          {
            star && (
              <View style={styles.leftBox}>
                <Text style={styles.starsAndAnswer}>{item.stars} 人关注</Text>
                <View style={styles.dot}></View>
                <Text style={styles.starsAndAnswer}>{item.answer_num} 条回答</Text>
              </View>
            )
          }


          {
            (help || comment) && (
              <View style={styles.leftBox}>
                <Image source={require('../TabOne/img/upvote.png')} />
                <Text style={styles.upvote}>{item.upvotes}</Text>
              </View>
            )
          }

          {
            help && (
              <View style={styles.leftBox}>
                <Image source={require('../TabOne/img/comment.png')} />
                <Text style={styles.upvote}>9</Text>
              </View>
            )
          }


          <View style={styles.rightBox}>
            <TouchableHighlight onPress={() => {console.log('h')}} style={styles.btnContainer}>
              <View style={styles.starBtn}>
                {
                  (star || comment) && (
                    <Image source={mapImg} style={styles.img} />
                  )
                }
                <Text style={styles.starText}>{btnText}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
    )
  }
}

export default TagBox;