import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import { AboutStyle as styles } from '../styles/';
import { Header } from '../../common/';

class About extends PureComponent {

  render() {
    const { item, navigation } = this.props;
    const midData = [
      {
        title: '电话：152-1128-8039',
      },
      {
        title: 'QQ：3106675558',
      },
      {
        title: '微信：15211288039',
      },
    ]
    return (
      <View style={styles.container}>
        <Header
            headerText="关于我们"
            showGradient={true}
            logoLeft={true}
            navigation={navigation}
          />

        <View style={styles.midBox}>
          <Image source={require('../img/logo.png')} />
          <Text style={styles.company}>湖南日康健康管理有限责任公司</Text>

          <View style={styles.titleBox}>
            {
              midData.map((item, key) => (
                <Text key={key} style={styles.title}>{item.title}</Text>
              ))
            }
          </View>

          <View style={styles.bottomBox}>
            <View style={styles.copyRightBox}>
              <Image source={require('../img/copyright.png')} />
              <Text style={styles.copyRight}>2017 至今</Text>
            </View>
            <Text style={styles.copyRight}>版权所有</Text>
          </View>
        </View>

      </View>
    )
  }

}

export default About;