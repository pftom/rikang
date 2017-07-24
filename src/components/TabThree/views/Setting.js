import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

import { ServiceStyle as styles } from '../styles/';

import { List, Switch, WhiteSpace, Button, Modal } from 'antd-mobile';

const Item = List.Item;
import { Header } from '../../common/';

import { getPatientProfileSelector } from '../../../selectors/';
import { LOGOUT } from '../../../constants/'

const alert = Modal.alert;

const showAlert = () => {

}

class Setting extends PureComponent {

  handleSubmitProfile = () => {
    const { navigation } = this.props;
    const { dispatch, token } = navigation.state.params;
    const { name, avatar, age, pickerValue, medical_history } = this.state;
    let body = {
      name,
      avatar,
      age,
      sex: pickerValue[0],
      medical_history,
    };

    dispatch({ type: UPDATE_PATIENT_PROFILE, payload: { body, token } } )

  }

  render() {
    const { item, dispatch, navigation, patientProfile, submitProfileError, submitProfileSuccess } = this.props;


    return (
      <View>
        <Header 
          logoLeft={true}
          headerText="设置"
          navigation={navigation}
          // settingSubmit={true}
          submitProfileError={submitProfileError}
          submitProfileSuccess={submitProfileSuccess}
          handleSubmitProfile={this.handleSubmitProfile}
          showGradient={true}
          dispatch={dispatch}
        />
        <List renderHeader={() => '消息通知'}>
          <Item extra={<Switch />}>在线咨询消息通知</Item>
          <Item extra={<Switch />}>新文章推送通知</Item>
          <Item extra={<Switch />}>问题新回答通知</Item>
          <Item extra={<Switch />}>评论回复通知</Item>
        </List>

        <List renderHeader={() => '账户安全'}>
          <Item arrow="horizontal">修改账户密码</Item>
          <Item 
            arrow="horizontal"
            onClick={() => alert('确定退出？', '', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => dispatch({ type: LOGOUT }) },
          ])}
          >注销账户</Item>
        </List>

        <List renderHeader={() => '意见与反馈'}>
          <Item arrow="horizontal">意见反馈</Item>
          <Item arrow="horizontal">日康客服</Item>
        </List>
      </View>
    )
  }

}

export default connect(
  state => getPatientProfileSelector(state),
)(Setting);