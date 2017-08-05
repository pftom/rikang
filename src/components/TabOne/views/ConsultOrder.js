import React, { PureComponent } from 'react';
import {
  ScrollView,
  View,
  Text,
  Animated,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import { connect } from 'react-redux';

import Pingpp from 'pingpp-react-native';

import { getServiceSelector } from '../../../selectors/';


//
import px2dp from '../../../utils/px2dp';

import { BottomButton } from '../../common/';

import { Header } from '../../common/';

import {
  CREATE_NEW_ORDER,

  CANCEL_ORDER,

  PAY,

  GET_CLIENT_IP,

  CLEAR_SERVICE_STATE,
} from '../../../constants/';

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
    kind: 'wx',
  }
]


class PopUpBox extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isAlipaySelected: true,
    }
  }


  handleSelect = (kind) => {
    console.log('kind', kind);
    if (kind === 'alipay') {
      this.setState({
        isAlipaySelected: true,
      })
    }

    if (kind === 'wx') {
      this.setState({
        isAlipaySelected: false,
      })
    }
  }

  render() {
    return (
      <View style={styles.payContainer}>
        <View style={styles.headerBox}>
          <View style={styles.titleBox}>
            <Text style={styles.headerTitle}>请选择支付方式</Text>
          </View>
          <TouchableOpacity onPress={() => { this.props.onClose() }}>
            <View style={styles.closeBox}>
              <Image source={require('../img/close.png')} style={styles.close} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.selectContainer}>
          {
            selectPay.map((item, key) => (
              <TouchableWithoutFeedback key={key} onPress={() => {
                  this.handleSelect(item.kind)
                }}>
              <View style={[ styles.itemBox, key === 0 && styles.itemExtra ]} >
                <Image source={item.icon} />
                <View style={styles.textBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                </View>
                <View style={styles.selectBox}>
                  <View style={[ styles.selectBox, { backgroundColor: '#F5F6F7'}]}>
                    {
                      item.kind === 'alipay'  && (
                        <Image style={styles.select} source={this.state.isAlipaySelected ? require('../img/select.png') : require('../img/unSelect.png')} />
                      )
                    }

                    {
                      item.kind === 'wx'  && (
                        <Image style={styles.select} source={this.state.isAlipaySelected ? require('../img/unSelect.png') : require('../img/select.png') } />
                      )
                    }
                  </View>
                </View>
              </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>
        <BottomButton isAlipay={this.state.isAlipaySelected} textStyle={{ letterSpacing: -0.4 }} boxStyle={{ position: null }}  content={this.props.priceText} token={this.props.token} dispatch={this.props.dispatch}  navigation={this.props.navigation}  kind={'goPay'} handlePayPage={() => { this.props.handlePayPage(this.state.isAlipaySelected) }} />
      </View>
    )
  }
}

class ConsultOrder extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isAlipaySelected: true,
      isClosed: false,
    };
  }

  successToast(msg) {
    this.props.dispatch({ type: CLEAR_SERVICE_STATE });
    Toast.success(msg, 1);
  }

  failToast(msg) {
    this.props.dispatch({ type: CLEAR_SERVICE_STATE });
    Toast.fail(msg, 1);
  }

  loadingToast() {
    Toast.loading('请稍后...', 1);
  }

  componentDidMount() {
    const { token, navigation, dispatch } = this.props;

    // dispatch({ type: GET_CLIENT_IP });
  }

  componentWillReceiveProps(nextProps) {
    const {
      isGetClientIp,
      getClientIpSuccess,
      getClientIpError,
      clientIp,

      isPaying,
      paySuccess,
      payError,
      charge,
    } = nextProps;

    const { navigation } = this.props;
    const { dispatch, token } = navigation.state.params;

    console.log('clientIp', clientIp);

    if (getClientIpError) {
      this.failToast('网络无连接');
    }

    if (paySuccess) {
      Popup.hide();
      this.props.dispatch({ type: CLEAR_SERVICE_STATE });
      Pingpp.createPayment({
        "object": charge,
        "urlScheme": "wx68751473156cfd6b",
      }, function(res, error) {
        if (error) {
          this.fail('支付未成功');
        } else {
          navigation.navigate('PaySuccess');
        }
      });
    }
  }


  onClose = () => {
    const { navigation } = this.props;
    const { data, dispatch, token } = navigation.state.params;
    const { newOrder } = this.props;

    const body = {
      order_no: newOrder.get('order_no'),
    };

    dispatch({ type: CANCEL_ORDER, payload: { token, body } });

    Popup.hide();
    this.setState({
      isClosed: true,
    })
  }

  handlePayPage = (isAlipay) => {
    Pingpp.setDebugModel(true);

    const { navigation } = this.props;
    const { data, dispatch, token } = navigation.state.params;
    const { newOrder, clientIp } = this.props;


    const body = {
      order_no: newOrder.get('order_no'),
      type: 'C',
      cost: newOrder.get('cost'),
      channel: isAlipay ? 'alipay' : 'wx',
      client_ip: '127.0.0.1',
    };

    dispatch({ type: PAY, payload: { token, body } } );
  }



  showModal = (priceText) => {
    const { navigation } = this.props;
    const { data, dispatch, token } = navigation.state.params;

    this.setState({
      isClosed: false,
    });
    

    const body = {
      type: 'C',
      doctor: data.get('id'),
    };

    dispatch({ type: CREATE_NEW_ORDER, payload: { token, body }});

    Popup.show(
      <PopUpBox data={data} dispatch={dispatch} onClose={this.onClose} handlePayPage={this.handlePayPage} token={token} priceText={priceText} navigation={navigation} />
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

    const priceText = `提交订单 - ￥${data && data.get('consult_price')}`;
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


export default connect(
  state => getServiceSelector(state),
)(ConsultOrder);