import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import { Toast } from 'antd-mobile';


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

  successToast() {
    Toast.success('关注成功', 1);
  }

  showToast() {
    Toast.info('已取消关注', 1);
  }

  handleStar = () => {
    if (this.state.starred) {
      this.showToast();
      this.setState({
        starred: false,
      })
      this.props.handleCancelStar();
    } else {
      this.successToast();
      this.setState({
        starred: true,
      })
      this.props.handleAddStar();
    }
  }

  handleTouch = () => {
    const { star, help, comment, navigation, token, item } = this.props

    if (star) {
      this.handleStar();
    }

    if (help) {
      navigation.navigate('DoctorDetail', { token, id: item.id });
    }

    if (comment) {
      console.log('hhh');
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
                  <Text style={styles.upvote}>9</Text>
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