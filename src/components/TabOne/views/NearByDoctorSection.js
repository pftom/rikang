import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';

import { MainScreenStyle as styles } from '../../styles/TabOneStyle';

class NearByDoctorSection extends PureComponent {

  renderItem(item, key) {
    const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => { console.log('hhh') }} key={key}>
        <View style={styles.nearbyDoctorItemBox}>
          <View style={styles.doctorAvatarBox}>
            <Image source={{ uri: item.avatar }} style={styles.doctorAvatar} />
          </View>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Image source={item.categoryImg} style={styles.categoryImg} />
          <View style={styles.ageBox}>
            <View style={styles.doctorAgeBox}>
              <Text style={styles.doctorAge}>从医{item.doctorAge}年</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { nearbyDoctor } = this.props;
    console.log('nearbyDoctor', nearbyDoctor)
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