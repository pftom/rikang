import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, ScrollView, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { GET_SINGLE_DOCTOR_INFO } from '../../../constants/'

import LinearGradient from 'react-native-linear-gradient';

//import selector for computing data
import { getDoctorInfoSelector } from '../../../selectors/';

//import styles 
import { DoctorDetailStyle as styles } from '../../styles/';

//import Header
import { Header } from '../../common/';

//import map object
import { titleMap } from '../data/'


class DoctorDetailInfo extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    dispatch({ type: GET_SINGLE_DOCTOR_INFO, payload: { token, id }});
  }

  render() {
    const { doctorInfo, payload, navigation } = this.props;
    
    const contentBox = [];

    
    //judge whether doctor has get 
    if (doctorInfo) {
      doctorInfo.map((item, key) => {
        if (key !== 'doctor') {
          contentBox.push({
          title: titleMap[key],
          content: item,
        })
        }
      });
    }

    return (
      <View style={{ flex: 1 }}>
        <Header 
          navigation={navigation}
          showGradient={true}
          headerText={'详细资料'}
          logoLeft={true}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          {
          doctorInfo && contentBox.map((item, key) => (
              <View style={styles.detailInfoContainer} key={key}>
                  <View style={styles.detailInfoBox}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <LinearGradient
                      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                      colors={['#09C79C', '#F5F6F7']}
                      style={styles.linearGradient} />
                  <Text style={styles.contentText}>{item.content}</Text>
                </View>
              </View>
            ))
          }
        </ScrollView>

      </View>
    )
  }
}

export default connect(
  state => getDoctorInfoSelector(state),
)(DoctorDetailInfo);