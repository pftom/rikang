import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  ScrollView, 
  StatusBar,
  Animated,
  Image,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { 
  GET_SINGLE_POST,
  ADD_SINGLE_POST_FAV,
  CANCEL_SINGLE_POST_FAV,
} from '../../../constants/';

//import selector for computing data
import { getPostSelector } from '../../../selectors/';

import { Header } from '../../common/';

//import post style
import { PostDetailStyle as styles } from '../../styles/'

//need to html render in the end
import HTMLView from 'react-native-html-render';


class PostDetail extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    }
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    dispatch({ type: GET_SINGLE_POST, payload: { token, id }});
  }

  render() {
    const { post, navigation, postFav, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    const { 
      isStarSingleQuestion, 
      starSingleQuestionSuccess, 
      starSingleQuestionError,
      isCancelStarSingleQuestion,
      cancelStarSingleQuestionSuccess,
      cancelStarSingleQuestionError,
     } = this.props;


    let httpStatus = {
      isStarSingleQuestion,
      starSingleQuestionSuccess,
      starSingleQuestionError,
      isCancelStarSingleQuestion,
      cancelStarSingleQuestionSuccess,
      cancelStarSingleQuestionError,
    }

    let whetherFaved = false;

    //whether have fav this doctor
    postFav.map(post => {
      if (post.get('id') === id) {
        whetherFaved = true;
      }
    })

    let animatedOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 60, 100],
      outputRange: [0, 0.6, 1],
    });

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.scrollBox}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={16}
            onScroll={
              Animated.event(
                [{nativeEvent: {contentOffset: {y: this.state.scrollY }}}]
              )
            }
          >
            {
              post && (
                <View style={styles.postBox}>
                  <Image source={{ uri: post.get('photo')}} style={styles.photo}>
                    <View style={styles.titleBox}>
                      <Text style={styles.title}>{post.get('title')}</Text>
                    </View>
                  </Image>
                  <Text style={styles.body}>{post.get('body')}</Text>
                </View>
              )
            }
          </ScrollView>
        </View>
        <Header 
          headerText="文章详情"
          logoLeft={true} 
          shareStar={true}
          share={true}
          animatedOpacity={animatedOpacity}
          navigation={navigation}
          httpStatus={httpStatus}
          showGradient={true} 
          dispatch={dispatch}
          whetherFaved={whetherFaved}
          handleCancelFav={() => { post && dispatch({ type: CANCEL_SINGLE_POST_FAV, payload: { token, id } } ) } }
          handleAddFav={() => { post && dispatch({ type: ADD_SINGLE_POST_FAV, payload: { token, id, post } } ) } }
        />
      </View>
    )
  }
}

export default connect(
  state => getPostSelector(state),
)(PostDetail);