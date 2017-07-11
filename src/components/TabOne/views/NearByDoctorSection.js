import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';

import { MainScreenStyle as styles } from '../../styles/TabOneStyle';

class NearByDoctorSection extends PureComponent {

  renderItem(item, key) {
    const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => { console.log('hhh') }} key={key}>
        <View style={styles.nearbyDoctorItemBox}>
          <Image source={item.avatar} style={styles.doctorAvatar} />
          <Text style={styles.doctorName}>{item.name}</Text>
          <View style={styles.categoryBox}>
            <Image source={item.categoryImg} style={styles.categoryImg} />
            <Text style={styles.categoryTitle}>{item.categoryTitle}</Text>
          </View>
          <View style={styles.ageBox}>
            <Text style={styles.doctorAge}>{item.doctorAge}</Text>
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