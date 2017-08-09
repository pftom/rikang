import React, { PureComponent } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableHighlight,
  Image,
  TextInput,
  Platform,
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

import { opppsiteDepartment } from '../../../utils/transferAbbr';

import {
  handleQuestions,
} from '../data/';

const sortData = [
  {
    label: '默认排序',
    value: '默认排序',
  },
  {
    label: '关注数最多',
    value: '关注数最多',
  },
  {
    label: '回答数最多',
    value: '回答数最多'
  }
];

class QaScreen extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      sort: '默认排序',
      dep: '全部科室',
      text: '',
    }
  }

  componentDidMount() {
    const { navigation, dispatch, token } = this.props;

    dispatch({ type: GET_QUESTIONS, payload: { token, refresh: true }});
  }

  handleSelectSort = (sort) => {
    this.setState({
      sort,
    })
  }

  handleSelectDep = (dep) => {
    this.setState({
      dep,
    })
  }

  handleSubmit = () => {
    const { navigation, dispatch, token } = this.props;

    let query = null;
    let search = false;
    if (this.state.text) {
      query = {
        search: this.state.text,
      }
      search = true;
    }

    console.log('text', this.state.text)
    
    dispatch({ type: GET_QUESTIONS, payload: { token, refresh: true, search, query }});
  }

  handleChangeText = (text) => {
    const { navigation, dispatch, token } = this.props;
    this.setState({
      text,
    });

    if (text === '') {
      dispatch({ type: GET_QUESTIONS, payload: { token, refresh: true }});
    }
  }

  render() {
    const { questions, navigation, questionFav, token, dispatch, questionStarredFav } = this.props;
    const { dep, sort } = this.state;
    let questionList = [];
    console.log('sort', sort);
    if (questions) {
      //the second params for horizontal(true) show ten item,
      questionList = handleQuestions(questions.get('results'), opppsiteDepartment[dep], sort[0]);
      console.log('questionList', questionList);
    }

    return (
      <View style={styles.container}>
        <UltimateFlatList
         listStyle={styles.listStyle}
          listData={questionList}
          method={GET_QUESTIONS}
          data={questions}
          enableRefresh={true}
          refreshMethod={[ GET_QUESTIONS ]}
          dispatch={this.props.dispatch}
          token={token}
          footText={"到底了哦..."}
          renderItem={(item) => <QuestionListItem questionFav={questionFav} questionStarredFav={questionStarredFav} token={token} dispatch={dispatch} navigation={navigation} item={item.item} question={item.question} />}
        />
        <SelectBox 
          titleLeft={"全部科室"}
          titleRight={"默认排序"}
          selectStyle={styles.selectStyle}
          sortData={sortData}
          handleSelectDep={this.handleSelectDep}
          handleSelectSort={this.handleSelectSort}
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

        <View style={styles.inputContainer}>  
          <View style={styles.inputBox}>
            <Image source={require('../img/search.png')} />
            <View>
                <TextInput
                  ref="textInput"
                  style={[ styles.textInput ]}
                  placeholder={"搜索你感兴趣的问题"}
                  onChangeText={(text) => { this.handleChangeText(text) }}
                  placeholderTextColor="#BFBFBF"
                  value={this.state.text}
                  autoCorrect={false}
                  returnKeyType="search"
                  onSubmitEditing={() => { this.handleSubmit() }}
              />
            </View>
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
