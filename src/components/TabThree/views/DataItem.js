import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Switch, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import SelectPhoto from './SelectPhoto';
import { logout } from '../../../actions/user';
const width = Dimensions.get('window').width;

const AUTHORITY = [8, 9, 10, 11, 13];
const NAVIGATION = {
  ['8']: 'PushNotification',
  ['9']: 'ModifyPassword',
  ['10']: 'Feedback',
};


class PersonDataItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch } = this.props;
    let renderContentBox = null;
    const { id } = this.props;

    if (AUTHORITY.includes(id)) {
      renderContentBox = id === 11 ? (
        <View style={styles.textBox}>
          <Text style={styles.text}>{this.props.content}</Text>
        </View>
      ) : (
        id === 8 
        ? (
          <View style={styles.textBox}>
            <Switch style={styles.arrow2} onTintColor="#FF0467" value={this.props.switchValue} onValueChange={value => this.props.handleValueChange(value)} />
          </View>
        )
        : (
          <TouchableOpacity onPress={() => id > 8 ? this.props.navigation.navigate(NAVIGATION[id]) : this.props.showSwitchPage(this.props.id)}>
          <View style={styles.textBox}>
            { <Text style={styles.text}>{id === 12 ? this.props.content : ( id >= 8 ? ' ' : this.props[this.props.DATA[id - 1].title])}</Text> }
            { (id !== 11 && id > 8) && <Image source={require('../img/arrow.png')} style={[styles.arrow, id > 8 && styles.arrow1]} /> }
          </View>
        </TouchableOpacity>
        )
      )
    } else {
      renderContentBox = (
        <View style={styles.content}>
          <Text style={styles.contentText}>{this.props[this.props.DATA[id - 1].title]}</Text>
        </View>
      )
    }

    return (
      <View style={[styles.itemInnerContainer, (this.props.id !== 3 && this.props.id !== 7) && styles.borderStyle, this.props.id === 1 && styles.picContainer]}>
        {
          id === 13
          ? (
            <TouchableOpacity onPress={() => dispatch(logout())}>
              <View style={id === 13 && styles.left}>
                <Text style={[styles.title, id === 13 && styles.title13]}>{this.props.title}</Text>
              </View>
            </TouchableOpacity>
          )
          : (
            <View style={id === 13 && styles.left}>
                <Text style={[styles.title, id === 13 && styles.title13]}>{this.props.title}</Text>
              </View>
          )
        }
        { 
          id !== 13 && (
            <View style={styles.right}>
              { !!this.props.avatar && <View style={styles.imgBox}><SelectPhoto num={2} avatar={this.props.data.avatar} /></View>}
              <View style={styles.contentBox}>
                {renderContentBox}
              </View>
            </View>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemInnerContainer: {
    flexDirection: 'row',
    width: width,
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    paddingRight: 10,
  },
  borderStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDD',
  },
  picContainer: {
    height: 54
  },
  contentBox: {
    alignItems: 'center',
    height: 44,
  },
  left: {
    width: width,
    alignItems: 'center',
  },
  title13: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#FF3B30'
  },
  contentText: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 15,
    color: '#8F8E94',
    letterSpacing: -0.41,
    backgroundColor: 'transparent',
    textAlign: 'right',
  },
  content: {
    paddingRight: 10,
    height: 40,
    width: 330,
    marginTop: 2,
    justifyContent: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    letterSpacing: -0.41,
    /* 消息推送通知: */
    fontFamily: '.AppleSystemUIFont',
    fontSize: 18,
    color: '#000000',
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 314,
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 15,
    color: '#8F8E94',
    letterSpacing: -0.41,
    paddingRight: 27,
    width: 314,
    textAlign: 'right'
  },
  arrow: {
    left: -11,
  },
  arrow1: {
    left: -40,
  },
  arrow2: {
    left: -65,
    marginTop: 2.5
  }
})

export default connect()(PersonDataItem);