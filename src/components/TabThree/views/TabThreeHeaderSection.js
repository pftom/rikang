import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//import style
import { HeaderSectionStyle as styles } from '../styles/HeaderSectionStyle';

import LinearGradient from 'react-native-linear-gradient';

//import select photo
import SelectPhoto from '../common/SelectPhoto';


class TabThreeHeaderSection extends PureComponent {

  render() {
    const { patientProfile } = this.props;
    return (
     <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            colors={['#23BCBB', '#45E994']}
            style={styles.headerBox}>
        
        {
          patientProfile && (
            <View>
              <View style={styles.topBox}>
              <Image source={require('../img/setting.png')} style={styles.setting} />
              </View>
              <View style={styles.bottomBox}>
                <View style={styles.leftBox}>
                  <SelectPhoto />
                </View>
                <View style={styles.rightBox}>
                  <Text style={styles.name}>{patientProfile.get('name')}</Text>
                  <View style={styles.infoBox}>
                    <Text style={styles.info}>个人信息</Text>
                    <Image source={require('../img/rightArrow.png')} />
                  </View>
                </View>
              </View>
            </View>
          )
        }


      </LinearGradient>
    )
  }
}


export default TabThreeHeaderSection;