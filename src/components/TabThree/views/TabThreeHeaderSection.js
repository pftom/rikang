import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//import style
import { HeaderSectionStyle as styles } from '../styles/HeaderSectionStyle';

import LinearGradient from 'react-native-linear-gradient';

//import select photo
import SelectPhoto from '../common/SelectPhoto';

import { UPDATE_PATIENT_PROFILE } from '../../../constants/';

import { SEXMAP } from '../data/';

class TabThreeHeaderSection extends PureComponent {

  handleAddPic = (img) => {
    const { dispatch, token, patientProfile } = this.props;

    let body = {
      name: patientProfile.get('name') || '无',
      avatar: img,
      age: isNaN(parseInt(patientProfile.get('age'))) ? 18 : parseInt(patientProfile.get('age')),
      sex: patientProfile.get('sex') || 'U',
      medical_history: patientProfile.get('medical_history'),
    };

    dispatch({ type: UPDATE_PATIENT_PROFILE, payload: { body, token } } )
  }

  render() {
    const { patientProfile, navigation, dispatch, token } = this.props;
    return (
     <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            colors={['#23BCBB', '#45E994']}
            style={styles.headerBox}>
          <View style={styles.topBox}>
                <TouchableOpacity onPress={() => { navigation.navigate('Setting', { patientProfile, token, dispatch })}}>
                  <Image source={require('../img/setting.png')} style={styles.setting} />
                </TouchableOpacity>
              </View>
        
        {
          patientProfile && (
            <View>
              
              <View style={styles.bottomBox}>
                <View style={styles.leftBox}>
                  <SelectPhoto handleAddPic={this.handleAddPic} personInfo={true} avatar={patientProfile && patientProfile.get('avatar') || null} />
                </View>
                <View style={styles.rightBox}>
                  <Text style={styles.name}>{patientProfile && patientProfile.get('name') && patientProfile.get('name') || '还没填写姓名'}</Text>
                  <TouchableOpacity onPress={() => { navigation.navigate('PatientPersonInfo', { token, patientProfile, dispatch })}}>
                    <View style={styles.infoBox}>
                      <Text style={styles.info}>个人信息</Text>
                      <Image source={require('../img/rightArrow.png')} />
                    </View>
                  </TouchableOpacity>
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