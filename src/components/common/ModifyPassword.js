import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView , Dimensions, StyleSheet, PixelRatio, Platform } from 'react-native';

import Header from './Header';
import { fetchChangePasswd } from '../../actions/user';

const width = Dimensions.get('window').width;

const PLACEHOLDER = [
  {
    id: 1,
    placeholder: '请输入当前密码',
    title: 'oldPasswd',
  },
  {
    id: 2,
    placeholder: '请输入新密码',
    title: 'newPasswd',
  },
  {
    id: 3,
    placeholder: '请再次输入新密码',
    title: 'newPasswd2',
  }
]

class TextBox extends Component {
  render() {
    const { id, placeholder, title } = this.props;
    return (
    <View style={[styles.itemInnerContainer, id !== 3 && styles.borderStyle]}>
      <TextInput style={styles.content} 
                      onChangeText={(text) => this.props.handleTextChange(text, title)} 
                      value={this.props.downSide}  
                      placeholder={placeholder}
                      placeholderTextColor="#C7C7CC"
                      returnKeyType="done"
                      clearButtonMode="while-editing"
                      autoCorrect={false}
                  />
      </View>
    )
  }
}

class ModifyPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPasswd: '',
      newPasswd: '',
      newPasswd2: '',
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(text, title) {
    this.setState({ [title]: text });
  }

  submit() {
      this.props.dispatch(fetchChangePasswd({
        username: this.state.value1 || '',
        password: this.state.value2 || '',
      }))
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          {
            PLACEHOLDER.map(item => <TextBox key={item.id} {...item} handleTextChange={this.handleTextChange} />)
          }
        </View>
        <View style={styles.itemContainer}>
            <View style={styles.itemInnerContainer}>
              <TouchableOpacity>
                <Text style={styles.feedBtn}>确认修改</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    )
  }
}

ModifyPassword.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        headerText="修改密码"
        logoLeft={require('../TabOne/img/back.png')}
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
    backgroundColor: '#F5F6F7',
  },
  itemContainer: {
    shadowOffset: { x: 0, y: 5 },
    shadowColor: '#C7C7C7',
    shadowRadius: 40,
    shadowOpacity: 0.32,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    marginTop: 10,
  },
  itemInnerContainer: {
    flexDirection: 'row',
    width: width,
    height: 44,
    alignItems: 'center',
    marginLeft: 10,
    paddingRight: 10,
  },
  content: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 15,
    color: '#C7C7CC',
    letterSpacing: -0.41,
    paddingRight: 10,
    height: 40,
    width: width - 10,
    backgroundColor: 'transparent',
    marginTop: 2,
    paddingTop: 5,
  },
  feedBtn: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 17,
    color: '#FC7437',
    width: width,
    textAlign: 'center'
  },
  borderStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDD',
  },
  
})

export default ModifyPassword;