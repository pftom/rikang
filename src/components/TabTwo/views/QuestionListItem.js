import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';



//import style
import { QuestionListStyle as styles } from '../../styles/';


class QuestionListItem extends PureComponent {
  
  render() {
    const { navigation, token, item } = this.props;
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('QuestionDetail', { id: item.key, token })}}>
        <View style={styles.container}>
          <View style={styles.QuestionBox}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.tagBox}>
              <View style={styles.leftBox}>
                <Text style={styles.starsAndAnswer}>{item.stars} 人关注</Text>
                <View style={styles.dot}></View>
                <Text style={styles.starsAndAnswer}>{item.answer_num} 条回答</Text>
              </View>
              <View style={styles.rightBox}>
                <TouchableHighlight onPress={() => {console.log('h')}} style={styles.btnComtainer}>
                  <View style={styles.starBtn}>
                    <Image source={require('../img/plus.png')} />
                    <Text style={styles.starText}>关注</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default QuestionListItem;