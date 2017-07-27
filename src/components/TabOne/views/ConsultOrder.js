import React, { PureComponent } from 'react';
import {
  ScrollView,
  View,
  Text,
  Animated,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

//get client ipv4 
import { NetworkInfo } from 'react-native-network-info';

//
import px2dp from '../../../utils/px2dp';

import { BottomButton } from '../../common/';

import { Header } from '../../common/';

import {} from '../../../constants/';

//import show modal
import { Popup, List, Button, Icon, Radio } from 'antd-mobile';
const RadioItem = Radio.RadioItem;
const Item = List.Item;

//import style
import {  ConsultOrderStyle as styles } from '../../styles/';

const HintMessage = [
  '● 请不要在咨询中透露与疾病无关的个人信息。',
  '● 在线咨询包含文字、图片和语音多种方式。',
  '● 如果医生2小时内未回复，将退还全部费用。',
  '● 咨询24小时有效，您可以有效期内任何时间继续开始咨询。',
];

const selectPay = [
  {
    icon: require('../img/alipay.png'),
    title: '支付宝',
    desc: '数亿用户都在用，安全可托付',
    kind: 'alipay',
  },
  {
    icon: require('../img/wechat.png'),
    title: '微信支付',
    desc: '中国领先的第三方支付平台',
    kind: 'wechat',
  }
]


class PopUpBox extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isAlipaySelected: true,
      isClosed: false,
    }
  }

  componentDidMount() {
    const { token, navigation, dispatch } = this.props;


  }

  handleSelect = (kind) => {
    console.log('kind', kind);
    if (kind === 'alipay') {
      this.setState({
        isAlipaySelected: true,
      })
    }

    if (kind === 'wechat') {
      this.setState({
        isAlipaySelected: false,
      })
    }
  }

  onClose = () => {

    Popup.hide();
    this.setState({
      isClosed: true,
    })
  }

  render() {
    return (
      <View style={styles.payContainer}>
        <View style={styles.headerBox}>
          <View style={styles.titleBox}>
            <Text style={styles.headerTitle}>请选择支付方式</Text>
          </View>
          <TouchableOpacity onPress={() => { this.onClose() }}>
            <View style={styles.closeBox}>
              <Image source={require('../img/close.png')} style={styles.close} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.selectContainer}>
          {
            selectPay.map((item, key) => (
              <View style={[ styles.itemBox, key === 0 && styles.itemExtra ]} key={key}>
                <Image source={item.icon} />
                <View style={styles.textBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                </View>
                <TouchableHighlight style={styles.selectBox} onPress={() => {
                  this.handleSelect(item.kind)
                }}>
                  <View style={[ styles.selectBox, { backgroundColor: '#F5F6F7'}]}>
                    {
                      item.kind === 'alipay'  && (
                        <Image source={this.state.isAlipaySelected ? require('../img/select.png') : require('../img/unSelect.png')} />
                      )
                    }

                    {
                      item.kind === 'wechat'  && (
                        <Image source={this.state.isAlipaySelected ? require('../img/unSelect.png') : require('../img/select.png') } />
                      )
                    }
                  </View>
                </TouchableHighlight>
              </View>
            ))
          }
        </View>
        <BottomButton textStyle={{ letterSpacing: -0.4 }} boxStyle={{ position: null }}  content={this.props.priceText} token={this.props.token} dispatch={this.props.dispatch}  navigation={this.props.navigation}  kind={'goPay'} handlePayPage={() => { this.handlePayPage() }} />
      </View>
    )
  }
}

class ConsultOrder extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isAlipaySelected: true,
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      console.log('nextState', nextState, this.state);
      return true;
    }
  }

  handlePayPage = () => {

  }



  showModal = (priceText) => {
    const { navigation } = this.props;
    const { data, dispatch, token } = navigation.state.params;

    Popup.show(
      <PopUpBox data={data} dispatch={dispatch} token={token} priceText={priceText} navigation={navigation} />
    , { animationType: 'slide-up', maskClosable: false })
  }

  render() {
    
    console.log('state', this.state);
    const { navigation } = this.props;
    const { data, dispatch, token } = navigation.state.params;

    const dataMap = [
      {
        title: '在线咨询费',
        price: data.get('consult_price'),
      },
      {
        title: '红包',
        price: '暂无'
      }
    ];

    const priceText = `提交提单 - ￥${data && data.get('consult_price')}`;
    return (
      <View style={styles.container}>
        <Header
          showGradient={true}
          headerText="咨询订单"
          logoLeft={true}
          navigation={navigation}
        />

        <View style={styles.consultContainer}>
          <Text style={styles.priceDetail}>费用详情</Text>
          {
            dataMap.map((item, key) => (
              <View key={key} style={styles.consultBox}>
                <Text style={styles.consultTitle}>{item.title}</Text>
                <Text style={[ styles.consultTitle, key === 1 && styles.noNow]}>{item.price}</Text>
              </View>
            ))
          }
         <View style={styles.totalBox}><Text style={styles.total}>小计 <Text style={styles.money}>￥{data && data.get('consult_price')}</Text></Text></View>
        </View>
        <View style={styles.hintBox}>
          {
            HintMessage.map((item, key) => (
              <Text key={key} style={styles.hintText}>{item}</Text>
            ))
          }
        </View>
        <BottomButton textStyle={{ letterSpacing: -0.4 }} content={priceText} token={token} dispatch={dispatch}  navigation={navigation}  kind={'popUpPayingPage'} showModal={() => { this.showModal(priceText) }} />
      </View>
    )
  }
}

export default ConsultOrder;