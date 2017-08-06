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
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { Toast } from 'antd-mobile';

import { getNewCommentSelector } from '../../../selectors/';

import { Header } from '../../common/';

import { BottomButton } from '../../common/';

//import post style
import { NewCommentStyle as styles } from '../styles/';

import { ADD_COMMENT_FOR_ORDER, CLEAR_COMMENT_ORDER_STATE } from '../../../constants/';

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
      counterText: '非常满意',
    }
  }

  handleTouch = (i) => {
    console.log('i', i);
    this.setState({
      ratings: parseInt(i),
      counterText: COUNTERTEXT[parseInt(i)],
    });
  }


  componentWillReceiveProps(nextProps) {
    const { isComment, commentSuccess, commentError } = nextProps;

    if (isComment) {
      this.loadingToast();
    } 

    if (commentSuccess) {

      this.successToast('评价成功');
    }

    if (commentError) {
      this.failToast('评价失败');
    }
  }

  handlePutComment = () => {
    const { text, value, ratings } = this.state;
    const { navigation } = this.props;
    const { order_no, dispatch, doctor, token } = navigation.state.params;

    if (text && text.length === 0) {
      this.failToast('评论内容不能为空');
    } else {

      const body = {
        order_no,
        body: text,
        ratings,
        doctor,
        anonymous: value,
      };

      dispatch({ type: ADD_COMMENT_FOR_ORDER, payload: { token, body }});
    }
  }

  successToast(msg) {
    this.props.dispatch({ type: CLEAR_COMMENT_ORDER_STATE });
    Toast.success(msg, 1);
  }

  failToast(msg) {
    this.props.dispatch({ type: CLEAR_COMMENT_ORDER_STATE });
    Toast.fail(msg, 1);
  }

  loadingToast() {
    Toast.loading('请稍后...', 1);
  }

  render() {

    const { headerText, navigation } = this.props;

    const { dispatch, token, isAddComment } = navigation.state.params;

    const { ratings } = this.state;

    console.log('ratings', ratings);

    const ITEMS = [];

    if (ratings && !isNaN(Number(ratings))) {
        for (let i = 1; i <= Number(ratings); i++) {
          ITEMS.push(
            <TouchableOpacity onPress={() => this.handleTouch(i) } key={i}>
              <Image source={require('../../TabOne/img/bigSolidHeart.png')} style={styles.img} />
            </TouchableOpacity>
          )
        }

        for (let i = Number(ratings) + 1; i <= 5; i++) {
          ITEMS.push(
            <TouchableOpacity onPress={() => this.handleTouch(i) } key={i}>
              <Image source={require('../../TabOne/img/bigHeart.png')} style={styles.img}  />
            </TouchableOpacity>
          )
        }
      }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          isAddComment && (
            <View style={styles.anonymousBox}>
              <Text style={styles.anonymous}>匿名评论</Text>
              <Switch 
                value={this.state.value}
                onValueChange={value => this.setState({ value: !this.state.value })}
              />
            </View>
          )
        }
        <View style={[ styles.commentBox, !isAddComment && styles.extraCommentBox ]}>
            <Text style={styles.ratings}>评论</Text>
            <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : "position"} >
              <TextInput
                placeholder='输入评论的内容...'
                placeholderTextColor="#B6B6B6"
                value={this.state.text}
                onChangeText={(text) => { this.setState({ text } ) } }
                multiline={true}
                style={styles.textInput}
                numberOfLines = {6}
              />
            </KeyboardAvoidingView>
        </View>
        <BottomButton content={'提交评价'} token={token} dispatch={dispatch} handlePutComment={this.handlePutComment}  navigation={navigation}  kind={'putComment'} />
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default connect(
  state => getNewCommentSelector(state),
)(NewComment);