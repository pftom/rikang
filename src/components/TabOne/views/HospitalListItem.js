import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
//transfer abbr to chinese char
import { transferHospitalClass } from '../../../utils/transferAbbr';


//import style
import { HospitalListStyle as styles } from '../../styles/';


class HospitalListItem extends PureComponent {

  renderIdenticalItem = (item, key) => {
    return (
      <View style={styles.iconBox} key={key}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.content}>{item.content}</Text>
      </View>
    )
  }
  
  render() {
    const { navigation, token, item } = this.props;
    const { doctor_num, rank } = item;
    console.log('item', item);
    const identical = [
      {
        content: '距您1.1km',
        icon: require('../img/location.png'),
      },
      {
        content: `${doctor_num}名医生`,
        icon: require('../img/doctor.png'),
      },
      {
        content: transferHospitalClass[rank],
        icon: require('../img/qualify.png'),
      },
      {
        content: '综合医院',
        icon: require('../img/more.png'),
      }
    ];

    return (

      <TouchableOpacity onPress={() => { navigation.navigate('HospitalDetail', { token, id: item.id }) }}>
        <View style={styles.container}>
          <View style={styles.nearbyHopBox}>

            <View style={styles.photoBox}>
              <Image source={{ uri: item.photo }} style={styles.photo}/>
            </View>

            <View style={styles.locationBox}>
              <Text style={styles.hospital_name}>{item.name}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>

            <View style={styles.identicalBox}>
              {
                identical.map((item, key) => this.renderIdenticalItem(item, key))
              }
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default HospitalListItem;