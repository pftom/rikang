import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  ScrollView, 
  StatusBar,
  Animated,
  Image,
  TouchableHighlight,
  Switch,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import { Map } from 'immutable';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { Toast, List, InputItem } from 'antd-mobile';

import { getNewCommentSelector } from '../../../selectors/';

import { Header } from '../../common/';

import { BottomButton } from '../../common/';

//import post style
import { MemberShipStyle as styles } from '../styles/';

import { ADD_COMMENT_FOR_ORDER, CLEAR_COMMENT_ORDER_STATE } from '../../../constants/';


class MemberShipContent extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      id: '',
    }
  }

  successToast(msg) {

    Toast.success(msg, 1);
  }

  failToast(msg) {

    Toast.fail(msg, 1);
  }

  loadingToast() {
    Toast.loading('请稍后...', 1);
  }


  handleMemberShip = () => {
    const { navigation } = this.props;

    const { name, id } = this.state;
    const { dispatch, token } = navigation.state.params;
    

    if (name && name.length === 0) {
      this.failToast('姓名不能为空');
    } else if (!id) {
      this.failToast('身份证号不能为空')
    } else if (id && (id.length < 15 || id.length > 18)) {
      this.failToast('身份证长度不正确');
    } else {
      const contentBody = {
        id,
        name,
      }
      const type = 'M';
      const data = Map({
        consult_price: 360,
      });
      const HintMessage = [
        '● 会员充值后拒不退款。',
      ];
      navigation.navigate('ConsultOrder', { token, dispatch, contentBody, HintMessage, type, data });
    }
  }

  render() {

    const { headerText, navigation } = this.props;

    const { dispatch, token, phone } = navigation.state.params;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <Header
          headerText={'填写会员信息'}
          logoLeft={true}
          showGradient={true}
          navigation={navigation}
        />
        <List
          renderHeader={() => "真实姓名"}
        >
          <InputItem 
            value={this.state.name}
            placeholder={'在此处填写您的姓名'}
            onChange={(text) => { this.setState({ name: text })}}
          />
        </List>

        <List
          renderHeader={() => "身份证号码"}
        >
          <InputItem 
            value={this.state.id}
            placeholder={'在此处填写您的身份证号'}
            onChange={(text) => { this.setState({ id: text })}}
          />
        </List>
        <BottomButton content={'立即开通'} token={token} dispatch={dispatch} handleMemberShip={this.handleMemberShip}  navigation={navigation}  kind={'membership'} />
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default MemberShipContent;