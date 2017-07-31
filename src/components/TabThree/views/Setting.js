import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, Switch, } from 'react-native';
import { connect } from 'react-redux';

import { ServiceStyle as styles } from '../styles/';

import { List, WhiteSpace, Button, Modal } from 'antd-mobile';

const Item = List.Item;
import { Header } from '../../common/';

import { getPatientProfileSelector } from '../../../selectors/';
import { LOGOUT } from '../../../constants/'

const alert = Modal.alert;

const showAlert = () => {

}

class Setting extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      value: false,
    }
  }

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
    const { token } = navigation.state.params;


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
          <Item extra={
            <Switch 
              value={this.state.value}
              onValueChange={value => this.setState({ value: !this.state.value })}
            />
        }>消息通知</Item>
        </List>

        <List renderHeader={() => '账户安全'}>
          <Item arrow="horizontal" onClick={ () => { navigation.navigate('ChangePassword', { token, dispatch }) }}>修改账户密码</Item>
          <Item 
            arrow="horizontal"
            onClick={() => alert('确定退出？', '', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => dispatch({ type: LOGOUT }) },
          ])}
          >注销账户</Item>
        </List>

        <List renderHeader={() => '意见与反馈'}>
          <Item 
            arrow="horizontal"
            onClick={ () => { navigation.navigate('Feedback', { token, dispatch }) } }
          >意见反馈</Item>
          <Item arrow="horizontal"
            onClick={ () => { navigation.navigate('About', { token, dispatch }) } }
          >日康客服</Item>
        </List>
      </View>
    )
  }

}

export default connect(
  state => getPatientProfileSelector(state),
)(Setting);