import React, { PureComponent } from 'react';
import {
  ScrollView,
  View,
  Text,
  Animated,
  Image,
} from 'react-native';

//
import px2dp from '../../../utils/px2dp';

//import style
import { AnswerListStyle as styles } from '../../styles/'

class AnswerListItem extends PureComponent {

  constructor(props) {
    super(props)
      this.state = {
        scrollYComment: new Animated.Value(0)
      }
  }

  renderBottomBox = (item) => {
    return (
      <View style={styles.iconBox}>
        <Image source={item.img} />
        <Text style={styles.iconText}>{item.text}</Text>
      </View>
    )
  }

  renderList = () => {
    const { name } = this.props;
    return lists.map((item, key) => (
      <View style={styles.container} key={key}>
        <View style={styles.answerBox}>
          
          <Text style={styles.question_title}>{item.question_title}</Text>
          
          <Text style={styles.name}>{name}医生的回答</Text>
          
          <View style={styles.bottomBox}>
            {this.renderBottomBox({ 
              img: require('../img/upvote.png'),
              text: item.upvotes,
            })}

            {this.renderBottomBox({ 
              img: require('../img/comment.png'),
              text: item.commentsCount,
            })}

            <View style={styles.spreadBox}>
              <Image source={require('../img/spread.png')} />
              <Text style={styles.spread}>展开</Text>
            </View>
          </View>
        </View>
      </View>
    ))
  }

  render() {
    const { item, name } = this.props;
    let scrollYComment = this.state.scrollYComment.interpolate({
      inputRange: [0, 200, 200],
      outputRange: [0, 200, 200+1]
    })

    return (
      <View style={styles.container}>
        <View style={styles.answerBox}>
          
          <Text style={styles.question_title}>{item.question_title}</Text>
          
          <Text style={styles.name}>{name}医生的回答</Text>
          
          <View style={styles.bottomBox}>
            {this.renderBottomBox({ 
              img: require('../img/upvote.png'),
              text: item.upvotes,
            })}

            {this.renderBottomBox({ 
              img: require('../img/comment.png'),
              text: item.commentsCount,
            })}

            <View style={styles.spreadBox}>
              <Image source={require('../img/spread.png')} />
              <Text style={styles.spread}>展开</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default AnswerListItem;