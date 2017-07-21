import React, { PureComponent } from 'react';
import {
  ScrollView,
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';

//
import px2dp from '../../../utils/px2dp';

//import style
import { AnswerListStyle as styles } from '../../styles/'

class AnswerListItem extends PureComponent {

  constructor(props) {
    super(props)
  }

  renderBottomBox = (item) => {
    return (
      <View style={styles.iconBox}>
        <Image source={item.img} />
        <Text style={styles.iconText}>{item.text}</Text>
      </View>
    )
  }

  

  render() {
    const { item, name, navigation, token } = this.props;
    console.log('item', item);

    return (
      <View style={styles.container}>
        <View style={styles.answerBox}>
          
          <Text style={styles.question_title}>{item.question_title}</Text>
          
          <Text style={styles.name}>{name}医生的回答</Text>
          
          <View style={styles.bottomBox}>

            {this.renderBottomBox({ 
              img: require('../img/comment.png'),
              text: item.commentsCount,
            })}

            <View style={styles.spreadBox}>
              <TouchableOpacity onPress={() => { navigation.navigate('QuestionDetail', { token, id: item.question })}}>
                <Image source={require('../img/spread.png')} />
                <Text style={styles.spread}>展开</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default AnswerListItem;