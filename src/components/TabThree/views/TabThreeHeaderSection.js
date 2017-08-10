import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//import style
import { HeaderSectionStyle as styles } from '../styles/HeaderSectionStyle';

import LinearGradient from 'react-native-linear-gradient';

import { Toast } from 'antd-mobile'

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

  successToast(msg) {
    Toast.success(msg, 1);
  }

  handleMemberShip = () => {
    const { navigation, membership } = this.props;
    if(!(membership && membership.get('expire'))) {
      this.successToast('您已开通会员');
    } else {
      navigation.navigate('MemberShip', { dispatch, token, });
    }
  }

  render() {
    const { patientProfile, navigation, dispatch, token, membership } = this.props;

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
                  <View style={styles.membershipBox}>
                    <Text style={styles.name}>{patientProfile && patientProfile.get('name') && patientProfile.get('name') || '还没填写姓名'}</Text>
                    {
                      !(membership && membership.get('expire')) && (
                        <Image source={require('../img/membership.png')} />
                      )
                    }
                  </View>
                  <View style={styles.infoContainer}>
                        <TouchableOpacity onPress={() => { navigation.navigate('PatientPersonInfo', { token, patientProfile, dispatch })}}>
                        <View style={styles.infoBox}>
                          <View style={styles.infoSecondContainer}>
                            <Image source={require('../img/pen.png')} />
                            <Text style={styles.info}>个人信息</Text>
                          </View>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => { this.handleMemberShip() }}>
                        <View style={styles.infoBox}>
                         <View style={styles.infoSecondContainer}>
                            <Image source={require('../img/sign.png')} />
                            <Text style={styles.info}>日康会员</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
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