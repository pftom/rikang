import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
//transfer abbr to chinese char
import { transferDepartment, transferTitle } from '../../../utils/transferAbbr';


//import style
import { DoctorListStyle as styles } from '../../styles/';


class DoctorListItem extends PureComponent {
  
  render() {
    const { navigation, token, item } = this.props;
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('DoctorDetail', { id: item.key, token })}}>
        <View style={styles.container}>
          <View style={styles.ItemBox}>
            <View style={styles.leftBox}>
              <View style={styles.avatarBox}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
              </View>
              <Text style={styles.doctorName}>{item.name}</Text>
            </View>
            <View style={styles.rightBox}>

              <View style={styles.titleBox}>
                <Text style={styles.department}>{transferDepartment[item.department]}</Text>
                <Text style={styles.title}>{transferTitle[item.title]}</Text>
              </View>

              <View style={styles.propBox}>
                <Text style={styles.hospitalName}>{item.hospital || '暂无'}</Text>
                <View style={styles.yearsBox}><Text style={styles.years}>从医 {item.years} 年</Text></View>
              </View>

              <View style={styles.consultBox}>
                <View style={styles.consultLeftBox}>
                  <Image source={require('../img/consult.png')} style={styles.consultImg} />
                  <Text style={styles.onlineConsult}>在线咨询</Text>
                  <Text style={styles.consultFee}>{item.consult_price}</Text>
                </View>
                <View style={styles.consultRightBox}>
                  <Text style={styles.payedNum}>{item.order_num} 人付款</Text>
                </View>
              </View>

              <Text style={styles.patientNum}>已帮助 {item.patient_num} 位患者</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default DoctorListItem;