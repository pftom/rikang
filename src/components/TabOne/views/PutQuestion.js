import React, { PureComponent } from 'react';
import { TouchableOpacity, Image, Text, View, TextInput, TouchableOpacityProperties } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { Picker } from 'antd-mobile';

//import async action constants
import { GET_SINGLE_POST } from '../../../constants/'

//import selector for computing data
import { getPostSelector } from '../../../selectors/'

import { PutQuestionStyle as styles } from '../../styles/';


const department = [
  [ 
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '秋',
      value: '秋',
    }
  ]
]


class PutQuestion extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      sValue: ['2013', '春'],
    };
  }

  componentDidMount() {
    // const { navigation, dispatch } = this.props;
    // const { token, id } = navigation.state.params;

    // dispatch({ type: GET_SINGLE_POST, payload: { token, id }});
  }

  renderInputBox = (item, key) => {
    const { navigation } = this.props;
    return (
      <View style={styles.itemBox} key={key}>
        <LinearGradient
              start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
              colors={['#23BCBB', '#45E994']}
              style={styles.linearGradient} />
        <View style={styles.rightBox}>
          <View style={styles.topBox}>
            <Image source={item.icon} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.bottomBox}>
            {
              key === 0 
              ? (
                <TextInput
                  ref="textInput"
                  style={[ styles.department, styles.textInput ]}
                  placeholder={"简单描述你的症状，20字之内"}
                  onChangeText={(text) => this.setState({ text })}
                  placeholderTextColor="#BFBFBF"
                  value={this.state.text}
                  maxLength={20}
                  autoCorrect={false}
              />
              )
              : (
                <TouchableOpacity>
                  <View style={styles.selectBox}>
                    <Text style={styles.department}>任何科室</Text>
                    <Image source={require('../img/triangle.png')} />
                  </View>
                </TouchableOpacity>
              )
            }
          </View>
        </View>
      </View>
    )
  }

  render() {
    const { navigation } = this.props;

    const data = [
      {
        icon: require('../img/book.png'),
        title: '问题概括',
      },
      {
        icon: require('../img/more.png'),
        title: '科室选择',
      },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.imgBox}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Image source={require('../img/close.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>免费提问</Text>
        <View style={styles.inputBox}>
          {
            data.map((item, key) => this.renderInputBox(item, key))
          }
        </View>
        <View style={styles.nextBox}>
          <TouchableOpacity onPress={() => { navigation.navigate('PutQuestionDetail', { value: this.state.text }) }}>
            <Image source={require('../img/next.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(
  state => getPostSelector(state),
)(PutQuestion);