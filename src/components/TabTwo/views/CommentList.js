import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { 
  GET_SINGLE_ANSWER_ALL_COMMENTS,  
  GET_SINGLE_ANSWER_ALL_COMMENTS_SUCCESS,
  GET_SINGLE_ANSWER_ALL_COMMENTS_ERROR,

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

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    //get the token from the navigate
    const { token, id } = navigation.state.params;
    //pull to refresh 
    dispatch({ type: GET_SINGLE_ANSWER_ALL_COMMENTS, payload: { token, id, refresh: true } });
  }

  render() {
    const { dispatch, navigation, singleAnswerAllComments } = this.props;
    const { token, id } = navigation.state.params;


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
            footText={ commentList.length > 0 ? "到底了哦..." : "还没有评论哦..."}
            renderItem={(item) => <CommentListItem item={item} navigation={navigation} token={token} />}
        />

        <KeyboardAvoidingView behavior="position" style={{alignSelf: 'stretch'}}>
          <View style={styles.textContainer}>
            <View>
              <TextInput
              multiline={true}
              style={styles.textInput}
              numberOfLines = {1}
              placeholder="输入你的评论"
              placeholderTextColor="#B6B6B6"
            />
            </View>
            <TouchableOpacity onPress={() => { console.log('hhh') }}>
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