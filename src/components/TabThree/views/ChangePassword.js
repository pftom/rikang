import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { ChangePasswordStyle as styles } from '../styles/';
import { Header } from '../../common/';

import { List, InputItem, Toast } from 'antd-mobile';
import { getChangePasswdSelector } from '../../../selectors/';

import { CHANGE_PASSWORD, CLEAR_PASSWORD_STATE } from '../../../constants/';

class ChangePassword extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      newPasswd: '',
      oldPasswd: '',
      confirmPasswd: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isChangePasswd, changePasswdSuccess, changePasswdError } = nextProps;
    console.log('props', nextProps);
    if (isChangePasswd) {
      this.loadingToast();
    }

    if (changePasswdSuccess) {
      this.successToast('修改成功');
    }

    if (changePasswdError) {
      this.failToast('修改失败');
    }
  }

  handleBtn = () => {
    const { navigation } = this.props;
    const { dispatch, token } = navigation.state.params;

    const { newPasswd, oldPasswd, confirmPasswd } = this.state;
    if (newPasswd !== confirmPasswd) {
      this.failToast('两次密码不匹配');
    } else {
      const body = {
        old_password: oldPasswd,
        new_password: newPasswd,
      };
      dispatch({ type: CHANGE_PASSWORD, payload: { token, body }});

      Keyboard.dismiss();
      this.setState({
        oldPasswd: '',
        newPasswd: '',
        confirmPasswd: '',
      })

    }
  }

  successToast(msg) {
    this.props.dispatch({ type: CLEAR_PASSWORD_STATE });
    Toast.success(msg, 1);
  }

  failToast(msg) {
    this.props.dispatch({ type: CLEAR_PASSWORD_STATE });
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
            headerText="修改密码"
            showGradient={true}
            logoLeft={true}
            navigation={navigation}
          />

          <List
            style={{
              marginTop: 10,
            }}
          >
          
            <InputItem
              placeholder={'请输入当前密码'}
              value={this.state.oldPasswd}
              onChange={(text) => this.setState({ oldPasswd: text })}
            />

            <InputItem
              placeholder={'请输入新密码'}
              value={this.state.newPasswd}
              onChange={(text) => this.setState({ newPasswd: text })}
            />

            <InputItem
              placeholder={'请再次输入新密码'}
              value={this.state.confirmPasswd}
              onChange={(text) => this.setState({ confirmPasswd: text })}
            />

          </List>

          <View style={styles.btnBox}>  
            <TouchableWithoutFeedback onPress={() => { this.handleBtn() }} style={styles.buttonContainer}>
              <View style={styles.buttonBox}>
                <Text style={[ styles.content, this.props.textStyle ]}>确认</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

}

export default connect(
  state => getChangePasswdSelector(state),
)(ChangePassword);