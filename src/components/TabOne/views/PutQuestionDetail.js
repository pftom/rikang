import React, { PureComponent } from 'react';
import { TouchableOpacity,ScrollView, Image, Text, View, TextInput, TouchableOpacityProperties } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { Picker } from 'antd-mobile';

//import async action constants
import { GET_SINGLE_POST } from '../../../constants/'

//import selector for computing data
import { getPostSelector } from '../../../selectors/'

import { PutQuestionStyle as styles } from '../../styles/';

import SelectPhoto from '../../TabThree/common/SelectPhoto';
import PhotoBrowser from 'react-native-photo-browser';


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


const EXMAPLES = [
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
];

class PutQuestionDetail extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      imgs: [],
    };
  }

  componentDidMount() {
    // const { navigation, dispatch } = this.props;
    // const { token, id } = navigation.state.params;

    // dispatch({ type: GET_SINGLE_POST, payload: { token, id }});
  }

  handleAddPic = (img) => {
    let { imgs } = this.state;
    
    let newImgs = imgs.concat({
      photo: img,
    });

    console.log('img', newImgs);
    this.setState({
      imgs: newImgs,
    });
  }

  


  render() {
    const { navigation } = this.props;
    console.log('imgs', this.state.imgs);

    return (
      <View style={styles.container}>
        <View style={styles.imgBox}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Image source={require('../img/close.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { console.log('ggg') }}>
            <Image source={require('../img/submit.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>症状描述</Text>
        <View>
          <TextInput
          ref="textInput"
          multiline={true}
          style={styles.detailInput}
          numberOfLines = {1}
          placeholder={"请尽可能详细地描述您的症状、疾病和身体状况，必要时可附加照片，便于医生更准确地分析。照片仅医生可见。"}
          onChangeText={(text) => this.setState({ text })}
          placeholderTextColor="#BFBFBF"
          value={this.state.text}
        />
        </View>

        <ScrollView contentContainerStyle={styles.selectImgBox}>  
          {
            this.state.imgs.map((item, key) => (
                <TouchableOpacity key={key} onPress={() => { navigation.navigate('ImageView', { media: this.state.imgs }) }}>
                  <Image source={{ uri: item.photo }} style={styles.img} />
                </TouchableOpacity>
            ))
          }
          <SelectPhoto addPhoto={true} handleAddPic={this.handleAddPic} />
        </ScrollView>
      </View>
    )
  }
}

export default connect(
  state => getPostSelector(state),
)(PutQuestionDetail);