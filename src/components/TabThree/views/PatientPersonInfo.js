import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import { ServiceStyle as styles } from '../styles/';

import { Header } from '../../common/';

import { List, InputItem, WhiteSpace } from 'antd-mobile';

class PatientPersonInfo extends PureComponent {

  render() {
    const { navigation, token, dispatch } = this.props;

    return (
      <View>
        <Header 
          logoLeft={true}
          headerText="个人信息"
          navigation={navigation}
          showGradient={true}
        />
        <List style={{ marginTop: 10 }}>
          <InputItem
          
          >
            头像
          </InputItem>
          <InputItem
          
          >
            手机号
          </InputItem>
          <InputItem
          
          >
            昵称
          </InputItem>
        </List>
      </View>
    )
  }

}

export default PatientPersonInfo;