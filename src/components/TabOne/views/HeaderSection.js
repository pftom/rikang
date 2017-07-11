import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//import style
import { MainScreenStyle as styles } from '../../styles/TabOneStyle';

const { headerTitleQa, headerTitleDoc, headerTitleHosp } = styles;

const headerStyles = [
  headerTitleQa,
  headerTitleDoc,
  headerTitleHosp,
]

class HeaderSection extends PureComponent {

  renderItem(item, key) {
    const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => {console.log('hhh')}} key={key}>
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