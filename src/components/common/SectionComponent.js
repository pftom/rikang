import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//impor style from styles
import { MainScreenStyle as styles } from '../styles/';

import LinearGradient from 'react-native-linear-gradient';

class SectionComponent extends PureComponent {

  render() {
    const { token, item, spread, seeMore, navigation, jumpToScreen, sectionNoBorder } = this.props;

    return (
      <View style={ [ styles.sectionBox, sectionNoBorder && { borderTopWidth: 0 }]}>
        <View style={styles.sectionLeftBox}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            colors={['#23BCBB', '#45E994']}
            style={styles.sectionGradient}
          />
          <Text style={styles.sectionTitle}>{item.key}</Text>
        </View>
        {
          spread && (
            <TouchableOpacity onPress={() => { navigation.navigate(jumpToScreen, { token }) }}>
              <View style={styles.sectionRightBox}>
                <Text style={styles.seeAll}>查看全部</Text>
                <Image source={require('../TabOne/img/rightArrow.png')} style={styles.sectionImg} />
              </View>
            </TouchableOpacity>
          )
        }
      </View>
    )
  }
}

export default SectionComponent;

