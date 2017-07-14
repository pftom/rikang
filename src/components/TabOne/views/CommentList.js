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

const lists = [];
for (let i = 0; i < 40; i++) {
  lists.push({
    "id": 1,
    "question": 1,
    "question_title": "为什么每次我进行撞墙练习后都会头痛",
    "diagnosis": "疾病预测",
    "prescription": "药物选择",
    "advice": "指导建议",
    "course": "推荐疗程",
    "picked": false,
    "upvotes": 3,
    "commentsCount": 4,
  });
}

class CommentList extends PureComponent {

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

    let scrollYComment = this.state.scrollYComment.interpolate({
      inputRange: [0, 200, 200],
      outputRange: [0, 200, 200+1]
    })

    return (
      <View style={{ flex: 1, backgroundColor: '#F5F6F7' }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
             [{nativeEvent: {contentOffset: {y: this.state.scrollYComment}}}]
           )}
          scrollEventThrottle={16}
        >
          <Animated.View style={{
              paddingBottom: 81 + px2dp(46),
              transform: [{translateY: scrollYComment}]
            }}>
              {this.renderList()}
            </Animated.View>
        </ScrollView>
      </View>
    )
  }
}

export default CommentList;