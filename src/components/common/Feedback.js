import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView , Dimensions, StyleSheet, PixelRatio, Platform } from 'react-native';

import Header from './Header';

const width = Dimensions.get('window').width;

class TextBox extends Component {
  render() {
    const { spacerProps } = this.props;
    return (
      <View style={styles.container}>
          <View style={styles.itemContainer}>
            <View style={[styles.itemInnerContainer, styles.multi]}>
            <TextInput style={styles.content} 
                            onChangeText={(text) => this.props.handleTextChange(text, 'downSide')} 
                            value={this.props.downSide}  
                            placeholder="存在不便？或有更好的改进意见？我们会认真聆听。"
                            placeholderTextColor="#C7C7CC"
                            returnKeyType="done"
                            maxLength={200}
                            multiline={true}
                            clearButtonMode="while-editing"
                            autoCorrect={false}
                        />
              <Text style={styles.rightBottom}>200</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.itemInnerContainer}>
            <TextInput style={styles.content} 
                            onChangeText={(text) => this.props.handleTextChange(text, 'upSide')} 
                            value={this.props.upSide}  
                            placeholder="Emain 或 Q Q / Wechat 号"
                            returnKeyType="done"
                            maxLength={10}
                            clearButtonMode="while-editing"
                            autoCorrect={false}
                        />
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.itemInnerContainer}>
              <TouchableOpacity>
                <Text style={styles.feedBtn}>提交反馈</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    )
  }
}

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upSide: '',
      downSide: '',
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(text, title) {
    this.setState({ [title]: text });
  }
  render(){
    return <TextBox handleTextChange={this.handleTextChange} {...this.state}/>;
  }
}

Feedback.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        headerText="意见反馈"
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
    marginTop: 20,
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
  multi: {
    height: 120,
  },
  feedBtn: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 17,
    color: '#FC7437',
    width: width,
    textAlign: 'center'
  }
  
})

export default Feedback;