import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import { ServiceStyle as styles } from '../styles/'

class ServiceItem extends PureComponent {

  render() {
    const { item, navigation } = this.props;

    return (
      <TouchableOpacity onPress={() => { console.log('hhh') }}>
        <View style={styles.problemContainer}>
          <View style={styles.problemBox}>
            {
              item.get('answer_num') && (
                <View style={styles.answerCountBox}>
                  <Text style={styles.answerCount}>{item.get('answer_num')}个新回答</Text>
                </View>
              )
            }
            <Text style={styles.title}>{item.get('title')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

}

export default ServiceItem;