import React, { PureComponent } from 'react';
import { TouchableOpacity, Keyboard, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import toast
import {
  Toast,
} from 'antd-mobile';

//import async action constants
import { 
  GET_SINGLE_ANSWER_ALL_COMMENTS,  

  CREATE_SINGLE_QUESTION_ANSWER_COMMENT,
  CLEAR_COMMENT,
} from '../../../constants/'

//import selector for computing data
import { getAnswerCommentSelector } from '../../../selectors/'

//import header common component
import { Header } from '../../common/';
//import stylesheet
import { CommentListStyle as styles } from '../styles/';

//import common list
import { UltimateFlatList } from '../../common/';

//import data handle func
import {
  handleAnswers,
} from '../data/';

//import comments list item
import CommentListItem from './CommentListItem';


class CommentList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      reply_to: null,
      reply_text: null,
    }
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    //get the token from the navigate
    const { token, id } = navigation.state.params;
    //pull to refresh 
    dispatch({ type: GET_SINGLE_ANSWER_ALL_COMMENTS, payload: { token, id, refresh: true } });
  }

  componentWillReceiveProps(nextProps) {
    const { commentSuccess, isCommenting, commentError } = nextProps;
    if (commentError) {
      this.failToast('评论失败');
    }

    if (isCommenting) {
      this.loadingToast();
    }

    if(commentSuccess) {
      this.successToast('评论成功');
    }
  }

  successToast(msg) {
    Toast.success(msg, 1);
  }

  failToast(msg) {
    this.props.dispatch({ type: CLEAR_COMMENT });
    Toast.fail(msg, 1);
  }

  loadingToast() {
    Toast.loading('评论中...', 1);
  }


  handleAnswerSubmit = (body) => {
    const { navigation, dispatch } = this.props;
    //get the token from the navigate
    const { token, id } = navigation.state.params;

    let reply = {};
    if (this.state.reply_to) {
      if (body.startsWith(this.state.reply_text)) {
        reply = {
          reply_to: this.state.reply_to,
        }
      }
    }

    dispatch({
      type: CREATE_SINGLE_QUESTION_ANSWER_COMMENT,
      payload: {
        body: {
          answer: id,
          body: body,
          ...reply,
        },
        token,
        id,
      }
    })
  }

  handleAnswerBtn = (item) => {
    this.setState({
      reply_to: item.id,
      text: `@${item.replier_name} `,
      reply_text: `@${item.replier_name}`,
    });
    this.refs.textInput.focus();
  }

  render() {
    const { dispatch, navigation, singleAnswerAllComments, commentListSeq } = this.props;
    const { token, id } = navigation.state.params;
    console.log('state', commentListSeq && commentListSeq);

    let commentList = [];
    if (singleAnswerAllComments) {
      commentList = handleAnswers(singleAnswerAllComments.get('results'));
    }


    return (
      <View style={styles.commentContainer}>
        <Header
          headerText="评论"
          logoLeft={true}
          showGradient={true}
          navigation={navigation}
        />

        <UltimateFlatList
            listStyle={{
              flex: 1,
              backgroundColor: '#F5F6F7',
            }}
            listData={commentList}
            method={GET_SINGLE_ANSWER_ALL_COMMENTS}
            data={singleAnswerAllComments}
            dispatch={this.props.dispatch}
            token={token}
            id={id}
            footText={ commentList.length > 0 ? "到底了哦..." : "还没有评论哦..."}
            renderItem={(item) => <CommentListItem handleAnswerBtn={this.handleAnswerBtn} item={item} navigation={navigation} token={token} />}
        />

        <KeyboardAvoidingView behavior="position" style={{alignSelf: 'stretch'}}>
          <View style={styles.textContainer}>
            <View>
              <TextInput
                ref="textInput"
                multiline={true}
                style={styles.textInput}
                numberOfLines = {1}
                placeholder={this.state.reply_text || "输入你的评论"}
                onChangeText={(text) => this.setState({ text })}
                placeholderTextColor="#B6B6B6"
                value={this.state.text}
              />
            </View>
            <TouchableOpacity onPress={() => { this.handleAnswerSubmit(this.state.text)  }}>
              <Text style={styles.btnText}>发布</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default connect(
  state => getAnswerCommentSelector(state),
)(CommentList);