import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';


import { connect } from 'react-redux';

import { ChangePasswordStyle as styles } from '../styles/';
import { Header } from '../../common/';

import { List, InputItem, Toast, TextareaItem, } from 'antd-mobile';
import { getFeedbackSelector } from '../../../selectors/';

import { FEEDBACK, CLEAR_FEEDBACK_STATE } from '../../../constants/';

class Feedback extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      feedback: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isFeedback, feedbackSuccess, feedbackError } = nextProps;
    console.log('props', nextProps);
    if (isFeedback) {
      this.loadingToast();
    }

    if (feedbackSuccess) {
      this.successToast('反馈成功');
    }

    if (feedbackError) {
      this.failToast('反馈失败');
    }
  }

  handleBtn = () => {
    const { navigation } = this.props;
    const { dispatch, token } = navigation.state.params;

    const { feedback } = this.state;
    if (feedback.length < 5) {
      this.failToast('反馈至少为6个字符');
    } else {
      const body = {
        body: feedback,
      };
      dispatch({ type: FEEDBACK, payload: { token, body }});

      Keyboard.dismiss();
      this.setState({
        feedback: ''
      })

    }
  }

  successToast(msg) {
    this.props.dispatch({ type: CLEAR_FEEDBACK_STATE });
    Toast.success(msg, 1);
  }

  failToast(msg) {
    this.props.dispatch({ type: CLEAR_FEEDBACK_STATE });
    Toast.fail(msg, 1);
  }

  loadingToast() {
    Toast.loading('请稍后...', 1);
  }

  render() {
    const { item, navigation } = this.props;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
          <Header
            headerText="意见反馈"
            showGradient={true}
            logoLeft={true}
            navigation={navigation}
          />

          <List
            style={{
              marginTop: 10,
            }}
            renderHeader={() => '我们懂得聆听，知错就改，您的意见是'}
          >
          
            <TextareaItem
              placeholder='你好，再见！'
              value={this.state.feedback}
              onChange={(text) => this.setState({ feedback: text })}
              rows={5}
              count={200}
            />

          </List>

          <View style={styles.btnBox}>  
            <TouchableWithoutFeedback onPress={() => { this.handleBtn() }} style={styles.buttonContainer}>
              <View style={styles.buttonBox}>
                <Text style={[ styles.content, this.props.textStyle ]}>提交</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

}

export default connect(
  state => getFeedbackSelector(state),
)(Feedback);