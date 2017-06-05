import React, { Component } from 'react';
import { Text, View, Image, ListView, TouchableOpacity, StyleSheet } from 'react-native';

import DetailOne from './DetailOne';
import DetailTwo from './DetailTwo';
import Header from '../../common/Header';



const MAP = {
  "java": "党的章程",
  "js": "党规党纪",
  "python": "党史精粹",
  "node": "人物长廊",
  "go": "党务资料",
}

class Learning extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={styles.headerTitle}>
        <Header 
          headerText={MAP[navigation.state.params.value]}
          navigation={navigation}
          logoLeft={require('../../TabOne/img/back.png')}
        />
      </View>
    ),
  });

  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(LEARNING[this.props.navigation.state.params.value]);
  }

  _renderRow(rowData) {
    const { navigation } = this.props;
    const { state, navigate } = navigation; 
    return (
      <View>
        {
          state.params.value === 'js' 
          ? (
            <TouchableOpacity onPress={() => navigate('DetailFour', { data: rowData })}>
              <DetailTwo {...rowData} navigation={navigation} />
            </TouchableOpacity>
          )
          : (
            <TouchableOpacity style={styles.detailOne} onPress={() => navigate('DetailThree', { data: rowData })}>
              <DetailOne {...rowData} navigation={navigation} />
            </TouchableOpacity>
          )
        }
      </View>
    )
  }

  render() {
    const { navigation } = this.props;
    const { navigate, state } = navigation;

    let condition = false;
    if (state.params.value === "js") {
      condition = true;
    }

    return (
      <Image style={styles.container} source={require('../img/background.png')}>
        <Text style={styles.helper}></Text>
        <ListView
          style={styles.listView}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={10}
        />
      </Image>
    )
  }
  
}

const styles = StyleSheet.create({
  headerTitle: {
    top: -10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  helper: {
    height: 48,
    backgroundColor: 'transparent',
  }
})

export default Learning;