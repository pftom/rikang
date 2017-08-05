import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  ScrollView, 
  StatusBar,
  Animated,
  Image,
  TouchableHighlight,
  Switch,
  TextInput,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { Header } from '../../common/';

import { BottomButton } from '../../common/';

//import post style
import { NewCommentStyle as styles } from '../styles/';

const COUNTERTEXT = [
  '很差',
  '还过得去',
  '有待提高',
  '一般满意',
  '比较满意',
  '非常满意',
];


class NewComment extends PureComponent {

  constructor(props) {
    super(props);

    const ratings = 5;

    

    this.state = {
      value: false,
      text: '',
      ratings,
      counterText: '非常满意'
    }
  }

  handleTouch = (i) => {
    this.setState({
      ratings: parseInt(i),
    });
  }

  handlePutComment = () => {
    console.log('hhhh');
  }

  render() {

    const { headerText, navigation } = this.props;

    const {  ratings } = this.state;

    const ITEMS = [];

    if (ratings && !isNaN(Number(ratings))) {
        for (let i = 0; i < Number(ratings); i++) {
          ITEM.push(
            <TouchableOpacity onPress={() => this.handleTouch(i) }>
              <Image source={require('../../TabOne/img/bigHeart.png')} style={styles.img} key={i} />
            </TouchableOpacity>
          )
        }

        for (let i = 0; i < 5 - Number(ratings); i++) {
          ITEM.push(
            <TouchableOpacity onPress={() => this.handleTouch(i) }>
              <Image source={require('../../TabOne/img/bigHeart.png')} style={styles.img} key={i} />
            </TouchableOpacity>
          )
        }
      }

    return (
      <View style={styles.container}>
        <Header
          headerText={headerText}
          logoLeft={true}
          showGradient={true}
          navigation={navigation}
        />
        <View style={styles.ratingsBox}>
          <Text style={styles.ratings}>评分</Text>
          <View style={styles.imgBox}>
            {
              ITEMS.map((item, key) => (
                item
              ))
            }
          </View>
          <Text style={styles.counterText}>{this.state.counterText}</Text>
        </View>
        {
          this.props.isAddComment && (
            <View style={styles.anonymousBox}>
              <Text style={styles.anonymous}>匿名评论</Text>
              <Switch 
                value={this.state.value}
                onValueChange={value => this.setState({ value: !this.state.value })}
              />
            </View>
          )
        }
        <View style={[ styles.commentBox, this.props.isAddComment && styles.extraCommentBox ]}>
            <Text style={styles.ratings}>评论</Text>
            <TextInput
              placeholder='输入评论的内容...'
              value={this.state.text}
              onChangeText={(text) => { this.setState({ text } ) } }
              multiline={true}
              style={styles.textInput}
            />
        </View>
        <BottomButton content={'提交评价'} token={token} dispatch={dispatch} handlePutComment={this.handlePutComment}  navigation={navigation}  kind={'putComment'} />
      </View>
    )
  }
}

export default NewComment;