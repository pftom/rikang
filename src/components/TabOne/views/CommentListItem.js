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
import { CommentListStyle as styles } from '../../styles/'

const handleTime = (time) => {
  let afterTime = '';
  afterTime += time.slice(0, 10);
  afterTime += ' ';
  afterTime += time.slice(11, 19);
  return afterTime;
}

class CommentList extends PureComponent {

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

    const { item } = this.props;
    let star = [];
    let unstar = [];

    for (let i = 0; i < item.ratings; i++) {
      star.push('heart');
    }
    for (let i = 0; i < 5 - item.ratings; i++) {
      unstar.push('entity_heart');
    }

    return (
      <View style={styles.container}>
        <View style={styles.commentBox}>
          <View style={styles.leftBox}>
            <Image source={{ uri: item.patient.avatar }} style={styles.avatar} />
          </View>
          <View style={styles.rightBox}>
            <View style={styles.nameBox}>
              <Text style={styles.name}>{item.patient.name}</Text>
              <Text style={styles.time}>{handleTime(item.created)}</Text>
            </View>
            <View style={styles.starBox}>
              {
                star.map((item, key) => (
                  <Image source={require('../img/entity_heart.png')} key={key}/>
                ))
              }
              {
                unstar.map((item, key) => (
                  <Image source={require('../img/heart.png')} key={key} />
                ))
              }
            </View>
            <View style={styles.contentBox}>
              <Text style={styles.content}>{item.body}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default CommentList;