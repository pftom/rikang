import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//import style
import { MainScreenStyle as styles } from '../../styles/TabOneStyle';

//import select photo
import SelectPhoto from '../common/SelectPhoto';


class TabThreeHeaderSection extends PureComponent {

  render() {
    const { patientProfile } = this.props;
    return (
      <View style={styles.headerBox}>
        <View style={styles.topBox}>
          <Image source={require('../img/setting.png')} style={styles.setting} />
        </View>
        <View style={styles.bottomBox}>
          <View style={styles.leftBox}>
            <SelectPhoto avatar={patientProfile.get('avatar')}/>
          </View>
          <View style={styles.rightBox}>
            <Text>{patientProfile.get('name')}</Text>
            <View style={styles.infoBox}>
              <Text style={styles.info}>个人信息</Text>
              <Image source={require('../img/rightArrow.png')} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}


export default TabThreeHeaderSection;