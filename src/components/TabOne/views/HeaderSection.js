import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//import style
import { MainScreenStyle as styles } from '../../styles/TabOneStyle';

const { headerTitleQa, headerTitleDoc, headerTitleHosp } = styles;

//descriminate style
const headerStyles = [
  headerTitleQa,
  headerTitleDoc,
  headerTitleHosp,
];

//import jump screen 
import { jumpScreen } from '../data/'


class HeaderSection extends PureComponent {

  renderItem(item, key) {
    const { navigation, token } = this.props;
    return (
      <TouchableOpacity onPress={() => { navigation.navigate(jumpScreen[item.title], { token }) }} key={key}>
        <View style={styles.headerItemBox}>
          <Image source={item.img} style={styles.headerImg} />
          <Text style={[
            styles.headerTitle,
            headerStyles[key]
            ]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { headerTitleData } = this.props;
    return (
      <View style={styles.headerBox}>
        {
          headerTitleData.map((item, key) => this.renderItem(item, key))
        }
      </View>
    )
  }
}


export default HeaderSection;