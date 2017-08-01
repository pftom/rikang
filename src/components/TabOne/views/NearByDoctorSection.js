import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';

import { MainScreenStyle as styles } from '../../styles/TabOneStyle';

class NearByDoctorSection extends PureComponent {

  renderItem(item, key) {
    const { navigation, token } = this.props;
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('DoctorDetail', { token, id: item.id }) }} key={key}>
        <View style={styles.nearbyDoctorItemBox}>
          <View style={styles.doctorAvatarBox}>
            <Image source={{ uri: item.avatar }} style={styles.doctorAvatar} />
          </View>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Image source={item.categoryImg} style={styles.categoryImg} />
          {
            !this.props.noYear && (
              <View style={styles.ageBox}>
                <View style={styles.doctorAgeBox}>
                  <Text style={styles.doctorAge}>从医{item.years}年</Text>
                </View>
              </View>
            )
          }
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { nearbyDoctor } = this.props;
    
    return (
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.nearbyDoctorBox}
        >
        {
          nearbyDoctor.map((item, key) => this.renderItem(item, key))
        }
      </ScrollView>
    )
  }
}


export default NearByDoctorSection;