import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

import { ServiceStyle as styles } from '../styles/';

import { Header } from '../../common/';

import { createForm } from 'rc-form';

import { GET_PATIENT_PROFILE, UPDATE_PATIENT_PROFILE } from '../../../constants/';
import { getPatientProfileSelector } from '../../../selectors/';

import { List, InputItem, Switch , WhiteSpace, TextareaItem, Picker } from 'antd-mobile';

import SelectPhoto from '../common/SelectPhoto';

const Item = List.Item;

const SEX = {
  U: '未选择',
  F: '女',
  M: '男',
};

const PICKDATA = [
  {
    label: '男',
    value: '男',
  },
  {
    label: '女',
    value: '女',
  },
];

class PatientPersonInfo extends PureComponent {

  constructor(props) {
    super(props);

    const { patientProfile } = this.props;

    this.state = {
      pickerValue: ['男'],
      name: patientProfile && patientProfile.get('name') || '' ,
      age: patientProfile && (patientProfile.get('age') + '') || '',
      medical_history: patientProfile && patientProfile.get('medical_history') || '',
      avatar: patientProfile && patientProfile.get('avatar') || 'https://facebook.github.io/react/img/logo_og.png',
      change: false,
    }
  }

  handleAddPic = (photo, uri) => {
    console.log('photo', photo);
    this.setState({
      avatar: photo,
    });
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
    const { navigation, patientProfile, submitProfileError, submitProfileSuccess } = this.props;
    const { dispatch } = navigation.state.params;
    const medical_history = patientProfile.get('medical_history');

    return (
      <View>
        <Header 
          logoLeft={true}
          headerText="个人信息"
          navigation={navigation}
          
          submitProfileError={submitProfileError}
          submitProfileSuccess={submitProfileSuccess}
          handleSubmitProfile={this.handleSubmitProfile}
          showGradient={true}
          dispatch={dispatch}
        />
        <List style={{ marginTop: 16 }}>
          <Item 
            multipleLine={true}
            extra={<SelectPhoto avatar={this.state.avatar} settingPhoto={true} handleAddPic={this.handleAddPic} />}
            arrow={'horizontal'}
          >
            头像
          </Item>
          <Item
            extra={patientProfile.get('phone')}
          >
            手机号
          </Item>
          <InputItem
            onChange={text => this.setState({ name: text })}
            value={this.state.name}
          >
            昵称
          </InputItem>

          <Picker 
            title="选择性别"
            onChange={v => this.setState({ pickerValue: v })}
            data={PICKDATA}
            cols={1}
            value={this.state.pickerValue}
          >
            <Item
              arrow={'horizontal'}
              extra={SEX[patientProfile.get('sex')]}
            >
              性别
            </Item>
          </Picker>

          <InputItem
            onChange={text => this.setState({ age: text })}
            value={this.state.age}
          >
            年龄
          </InputItem>
        </List>

        <List
         style={{
           marginTop: 16
         }}
        > 
          <Item>
            疾病历史
          </Item>

          <TextareaItem
            autoHeight
            labelNumber={5}
            onChange={text => this.setState({ medical_history: text })}
            value={this.state.medical_history}
          />

        </List>
      </View>
    )
  }

}


export default connect(
  state => getPatientProfileSelector(state),
)(PatientPersonInfo);