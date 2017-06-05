import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../common/Header';
import DataItem from './DataItem';

const DATA = [
  {
    id: 8,
    title: '消息推送通知',
  },
  {
    id: 9,
    title: '修改密码',
  },
  {
    id: 10,
    title: '意见反馈',
  },
  {
    id: 11,
    title: '当前版本',
    content: '1.0.0',
  },
  {
    id: 13,
    title: '退出登录',
  }
];

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchValue: false,
    }

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(switchValue) {
    this.setState({ switchValue })
  }

  render() {
    const { navigation } = this.props;
    let itemOne = [], itemTwo = [], itemThree = [], itemFour = [];
    DATA.map((item, key) => {
      if (key <= 1) {
        itemOne.push(<DataItem {...item} switchValue={this.state.switchValue } handleValueChange={this.handleValueChange} key={item.id} navigation={navigation} DATA={DATA} />);
      } else if (key <= 3 ) {
        itemTwo.push(<DataItem {...item} key={item.id} navigation={navigation} DATA={DATA} />); 
      } else if (key <= 4) {
        itemThree.push(<DataItem {...item} dispatch={this.props.dispatch} showModal={this.showModal} key={item.id} navigation={navigation} DATA={DATA} />);
      } else {
        itemFour.push(<DataItem {...item} key={item.id} navigation={navigation} DATA={DATA} />);
      }
    })

    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>{itemOne}</View>
        <View style={styles.itemContainer}>{itemTwo}</View>
        <View style={styles.itemContainer}>{itemThree}</View>
        <View style={styles.itemContainer}>{itemFour}</View>
      </View>
    )
  }
}

Setting.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header
        logoLeft={require('../../TabOne/img/back.png')} 
        headerText="设    置"
        navigation={navigation}
      />
    </View>
  ),
})

const styles = StyleSheet.create({
  headerTitle: {
    top: -10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f6f7',
  },
  itemContainer: {
    shadowOffset: { x: 0, y: 5 },
    shadowColor: '#C7C7C7',
    shadowRadius: 40,
    shadowOpacity: 0.32,
    backgroundColor: '#FFF',
    marginTop: 20,
    overflow: 'hidden',
  },
})

export default connect()(Setting);