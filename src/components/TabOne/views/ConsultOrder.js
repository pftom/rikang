import React, { PureComponent } from 'react';
import {
  ScrollView,
  View,
  Text,
  Animated,
  Image,
} from 'react-native';

//
import px2dp from '../../../utils/px2dp';

import { Header } from '../../common/';

//import style
import { CommentListStyle as styles } from '../../styles/';

const HintMessage = [
  '● 请不要在咨询中透露与疾病无关的个人信息。',
  '● 在线咨询包含文字、图片和语音多种方式。',
  '● 如果医生2小时内未回复，将退还全部费用。',
  '● 咨询24小时有效，您可以有效期内任何时间继续开始咨询。',
];

class ConsultOrder extends PureComponent {

  render() {
    return (
      <View>
        <Header
          showGradient={true}
          headerText="咨询订单"
          logoLeft={true}
        />

        <View>
          <Text></Text>
          <View></View>
          <View></View>
        </View>
        <View>
          {

          }
        </View>
      </View>
    )
  }
}

export default ConsultOrder;