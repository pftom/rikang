import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import { Toast } from 'antd-mobile';

//import constants
import { CLEAR_FAV_STATE } from '../../constants/'


//import style
import { QuestionListStyle as styles } from '../TabTwo/styles/';


class TagBox extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      starred: false,
    }
  }

  componentDidMount() {
    const { whetherStarred } = this.props;

    //update star status
    this.setState({
        starred: whetherStarred,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.whetherStarred !== this.props.whetherStarred) {
      this.setState({
        starred: nextProps.whetherStarred,
      })
    }
  }

  successToast(msg) {
    const { dispatch } = this.props;
    this.setState({
      starred: !this.state.starred,
    });

    dispatch({ type: CLEAR_FAV_STATE });
    Toast.success(msg, 1);
  }

  // showToast() {
  //   const { dispatch } = this.props;
  //   this.setState({
  //     faved: false,
  //   });

  //   dispatch({ type: CLEAR_FAV_STATE });
  //   Toast.info('已取消收藏', 1);
  // }

  loadingToast(msg) {
    Toast.loading(msg, 1);
  }

  failToast(msg) {
    const { dispatch } = this.props;
    dispatch({ type: CLEAR_FAV_STATE });
    Toast.fail(msg, 1);
  }

  componentWillReceiveProps(nextProps) {
    const { httpStatus } = nextProps;
      if(httpStatus) {
        const { 
        isStarSingleQuestion, 
        starSingleQuestionSuccess, 
        starSingleQuestionError,

        isCancelStarSingleQuestion,
        cancelStarSingleQuestionSuccess,
        cancelStarSingleQuestionError,
      } = httpStatus;
      if (isStarSingleQuestion || isCancelStarSingleQuestion) {
        if (isStarSingleQuestion) {
          this.loadingToast('收藏中...');
        } else {
          this.loadingToast('取消收藏中...');
        }
      }

      if (starSingleQuestionSuccess || cancelStarSingleQuestionSuccess) {
        if (starSingleQuestionSuccess) {
          this.successToast('收藏成功');
        } else {
          this.successToast('已取消收藏');
        }
      }

      if (starSingleQuestionError || cancelStarSingleQuestionError) {
        this.failToast('收藏失败');
      }
    }

  }

  handleStar = () => {
    if (this.state.starred) {
      this.props.handleCancelStar();
    } else {
      this.props.handleAddStar();
    }
  }

  handleTouch = () => {
    const { star, help, comment, navigation, token, item } = this.props;

    if (star) {
      this.handleStar();
    }

    if (help) {
      navigation.navigate('DoctorDetail', { token, id: item.id });
    }

    if (comment) {
      this.props.handleAnswerBtn(item);
    }
  }
  
  render() {
    const { navigation, token, item } = this.props;

    //get judge condition
    const { star, help, comment, btnText } = this.props;

    const mapImg = star ? require('./img/plus.png') : require('./img/leftArrow.png');

    let renderText = null;
    
    if (this.state.starred && star) {
      renderText = '已关注';
    } else {
      renderText = btnText;
    }

    return (
      <View style={[ styles.tagBox, comment && styles.commentBox]}>
          {
            star && (
              <View style={styles.leftBox}>
                <Text style={styles.starsAndAnswer}>{item.stars} 人关注</Text>
                <View style={styles.dot}></View>
                <Text style={styles.starsAndAnswer}>{item.answer_num} 条回答</Text>
              </View>
            )
          }


          {
            help && (
              <TouchableOpacity onPress={() => { navigation.navigate('CommentList', { token, id: item.id }) }}>
                <View style={[ styles.leftBox]}>
                  <Image source={require('../TabOne/img/comment.png')} />
                  <Text style={styles.upvote}>{item.comment_num}</Text>
                </View>
              </TouchableOpacity>
            )
          }


          <View style={styles.rightBox}>
            <TouchableHighlight onPress={() => { this.handleTouch() }} style={styles.btnContainer}>
              <View style={[ styles.starBtn, this.state.starred && styles.starredBtn ]}>
                {
                  ((star || comment) && !this.state.starred) && (
                    <Image source={mapImg} style={styles.img} />
                  )
                }
                <Text style={styles.starText}>{renderText}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
    )
  }
}

export default TagBox;