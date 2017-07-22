import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, ScrollView, Image } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { 
  GET_SINGLE_QUESTION,

  GET_SINGLE_QUESTION_ALL_IMG,

  STAR_SINGLE_QUESTION,
  CANCEL_STAR_SINGLE_QUESTION,

  GET_SINGLE_QUESTION_ALL_ANSWERS,

  GET_SINGLE_QUESTION_ANSWER,
  GET_SINGLE_QUESTION_ANSWER_SUCCESS,
  GET_SINGLE_QUESTION_ALL_IMG_ERROR,


} from '../../../constants/'

//import selector for computing data
import { getSingleQaSelector } from '../../../selectors/';

import { Header } from '../../common/';

//import tag box
import { TagBox } from '../../common/';

//import handle func
import { handleQuestion, handleAnswers } from '../data/';

//import style
import { QaDetailStyle as styles } from '../styles/';


//import list
import { UltimateFlatList } from '../../common/';

//import item
import QaAnswerListItem from './QaAnswerListItem';

const EXMAPLES = [
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
];

class QuestionDetail extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    dispatch({ type: GET_SINGLE_QUESTION, payload: { token, id }});
    dispatch({ type: GET_SINGLE_QUESTION_ALL_IMG, payload: { token, id }});
    dispatch({ type: GET_SINGLE_QUESTION_ALL_ANSWERS, payload: { token, id, refresh: true }});
  }

  render() {
    const { question, AllImg, dispatch, navigation, answers, questionFav } = this.props;
    const { token, id } = navigation.state.params;

    let answerList = [];
    if (answers) {
      answerList = handleAnswers(answers.get('results'));
    }

    let whetherStarred = false;

    //whether have fav this doctor
    questionFav.map(question => {
      if (question.get('id') === id) {
        whetherStarred = true;
      }
    })

    const solvedFlag = question && question.has('solved') && question.get('solved');

    let header = null;
    if (question) {
      header = () => (
        <View style={styles.questionContainer}>
          <View style={styles.topBox}>
              <Text style={styles.title}>
                {question.get('title')}
                {
                  solvedFlag && (
                    <Text style={styles.solved}>（已解决）</Text>
                  )
                }
              </Text>  
              
            </View>
            <View style={styles.body}>
              <Text style={styles.content}>{question.get('body')}</Text>
            </View>
            
            <View style={styles.imgBox}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {
                  EXMAPLES.map((item, key) => (
                    <TouchableOpacity key={key} onPress={() => navigation.navigate('ImageView', { media: EXMAPLES })}>
                      <Image source={{ uri: item.photo }} style={styles.photo} />
                    </TouchableOpacity>
                  ))
                }
              </ScrollView>
            </View>
            <View style={styles.tagContainer}>
              <TagBox 
                star={true} 
                item={handleQuestion(question)} 
                btnText={"关注"} 
                navigation={navigation}
                token={token}
                whetherStarred={whetherStarred}
                handleCancelStar={() => { dispatch({ type: CANCEL_STAR_SINGLE_QUESTION, payload: { token, id } }) }}
                handleAddStar={() => { dispatch({ type: STAR_SINGLE_QUESTION, payload: { token, id, question } }) }}
              />
            </View>
            <View style={styles.graySpace}/>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Header
          logoLeft={true}
          headerText={"问题详情"}
          navigation={navigation}
          showGradient={true}
        />

        {
          answers && (
            <UltimateFlatList
              listStyle={{
                  flex: 1,
                  backgroundColor: '#F5F6F7',
              }}
              header={header}
              listData={answerList}
              method={GET_SINGLE_QUESTION_ALL_ANSWERS}
              data={answers}
              dispatch={this.props.dispatch}
              token={token}
              id={id}
              footText={ answerList.length ? "到底了哦..." : "啊哦！还没有回答哦"}
              renderItem={(item) => <QaAnswerListItem token={token} navigation={navigation} item={item} />}
            />
          )
        }
      </View>
    )
  }
}

export default connect(
  state => getSingleQaSelector(state),
)(QuestionDetail);