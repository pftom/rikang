import React, { PureComponent } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableHighlight,
  Image,
 } from 'react-native';
import { connect } from 'react-redux';

//import action constants
import { GET_QUESTIONS } from '../../../constants/'
//import selector
import { getQaSelector } from '../../../selectors/'



//import header
import Header from '../../common/Header';

import QuestionListItem from './QuestionListItem';

//import list
import { UltimateFlatList, SelectBox } from '../../common/';

//import styles
import { QaMainScreenStyle as styles } from '../styles/';

import {
  handleQuestions,
} from '../data/'

class QaScreen extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch, token } = this.props;

    dispatch({ type: GET_QUESTIONS, payload: { token, refresh: true }});
  }

  render() {
    const { questions, navigation, token, dispatch, questionFav } = this.props;

    let questionList = [];
    if (questions) {
      //the second params for horizontal(true) show ten item,
      questionList = handleQuestions(questions.get('results'));
      console.log('questionList', questionList);
    }

    return (
      <View style={styles.container}>
        <UltimateFlatList
         listStyle={{
              flex: 1,
              backgroundColor: '#F5F6F7',
              marginTop: 81 + 49
          }}
          listData={questionList}
          method={GET_QUESTIONS}
          data={questions}
          enableRefresh={true}
          refreshMethod={[ GET_QUESTIONS ]}
          dispatch={this.props.dispatch}
          token={token}
          footText={"到底了哦..."}
          renderItem={(item) => <QuestionListItem questionFav={questionFav} token={token} dispatch={dispatch} navigation={navigation} item={item.item} question={item.question} />}
        />
        <SelectBox 
          titleLeft={"全部科室"}
          titleRight={"默认排序"}
          selectStyle={{
            position: 'absolute',
            top: 81,
            left: 0,
            right: 0,
          }}
        />
        <Header 
          navigation={navigation}
          showGradient={true}
          headerStyle={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        />

        <View style={styles.putQuestionContainer}>  
            <View style={styles.putQuestionBox}>
              <TouchableHighlight style={styles.putQuestionTouch} onPress={() => { navigation.navigate('PutQuestion', { token, dispatch }) }}>
                <View style={styles.putQuestionInlineBox}>
                  <Image source={require('../img/putQuestion.png')} />
                  <Text style={styles.putQuestionText}>我要提问</Text>
                </View>
              </TouchableHighlight>
            </View>
        </View>
        
      </View>
    )
  }
}

QaScreen.navigationOptions = {
  title: 'Qa Screen',
};

export default connect(
  (state) =>  getQaSelector(state)
)(QaScreen);
