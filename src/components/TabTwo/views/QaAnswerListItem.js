import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';


//import tag box
import { TagBox } from '../../common/';

import {
  transferDepartment,
  transferTitle,
} from '../../../utils/transferAbbr.js';

import { QaAnswerListStyle as styles } from '../styles/'

class QaAnswerListItem extends PureComponent {

  renderItem = (item, key) => {

    return (
      <View style={styles.itemBox} key={key}>
        <View style={styles.leftBox}>
          <Image source={item.icon} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      </View>
    )
  }

  render() {
    const { item } = this.props;
    //answer listitem data
    const midBoxData = [
      {
        icon: require('../img/forecast.png'),
        title: '疾病预测',
        content: item.diagnosis,
      },
      {
        icon: require('../img/medicine.png'),
        title: '药物选择',
        content: item.prescription,
      },
      {
        icon: require('../img/time.png'),
        title: '推荐疗程',
        content: item.course,
      },
      {
        icon: require('../img/advice.png'),
        title: '指导建议',
        content: item.advice,
      },
    ];

    return (
      <View style={styles.answerContainer}>
        <View style={styles.answerBox}>
          <View style={styles.answerHead}>
            <View style={styles.doctorAvatarBox}>
              <Image source={{ uri: item.avatar }} style={styles.doctorAvatar} />
            </View>
            <View style={styles.idBox}>
              <Text style={styles.name}>{item.owner.name}</Text>
              <Text style={styles.location}>
                {item.owner.hospital_name}{transferDepartment[item.owner.department]}{transferTitle[item.owner.title]}
              </Text>
            </View>
            <View style={styles.spreadBox}>
                <Image source={require('../../TabOne/img/spread.png')} />
                <Text style={styles.spread}>展开</Text>
            </View>
          </View>
          <View style={styles.answerMid}>
            {
              midBoxData.map((item, key) => this.renderItem(item, key))
            }
          </View>
          <View style={styles.tagContainer}>
            <TagBox help={true} item={item} btnText={"向TA求助"} />
          </View>
        </View>
      </View>
    )
  }
}

export default QaAnswerListItem;