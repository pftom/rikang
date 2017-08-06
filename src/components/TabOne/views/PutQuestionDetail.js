import React, { PureComponent } from 'react';
import { TouchableOpacity,ScrollView, Image, Text, Platform, KeyboardAvoidingView, View, TextInput, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';



import { Picker, Toast } from 'antd-mobile';

//import async action constants
import { 
  GET_SINGLE_POST,
  CREATE_SINGLE_QUESTION,

  ADD_SINGLE_QUESTION_IMG,
} from '../../../constants/'

//import selector for computing data
import { getQuestionStatusSelector } from '../../../selectors/'

import { PutQuestionStyle as styles } from '../../styles/';

import SelectPhoto from '../../TabThree/common/SelectPhoto';
import PhotoBrowser from 'react-native-photo-browser';



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

  handleAddPic = (img, uri) => {
    let { imgs } = this.state;
    
    let newImgs = imgs.concat({
      photo: img,
      uri: uri,
    });

    console.log('img', newImgs);
    this.setState({
      imgs: newImgs,
    });
  }

  
  handleSubmitQuestion = () => {
    const { navigation } = this.props;
    const { token, title, department, dispatch } = navigation.state.params;
    const { text, imgs } = this.state;
    const body = {
      body: text,
      title,
      department,
    };

    dispatch({ type: CREATE_SINGLE_QUESTION, payload: { token, body, imgs }});
  }

  componentWillReceiveProps(nextProps) {
    const { navigation } = this.props;
    const { isAddQuestion, addQuestionSuccess, addQuestionError } = nextProps;

    if (isAddQuestion) {
      this.loadingToast();
    }

    if(addQuestionSuccess) {
      this.successToast(navigation);
    }

    if(addQuestionError) {
      this.failToast('发布失败');
    }
  }

  successToast(navigation) {
    Toast.success('发布成功', 1);
    
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'TabBarNavigation' }),
      ]
    });

    navigation.dispatch(resetAction);
  }

  failToast(msg) {
    this.props.dispatch({ type: CLEAR });
    Toast.fail(msg, 1);
  }

  loadingToast() {
    Toast.loading('发布中...', 1);
  }

  render() {
    const { navigation } = this.props;
    const { token, title, department, dispatch } = navigation.state.params;
    const { imgs } = this.state;

    console.log('props', this.props);

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <View style={styles.imgBox}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Image source={require('../img/close.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.handleSubmitQuestion() }}>
            <Image source={require('../img/submit.png')} style={styles.subText} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>症状描述</Text>
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : "position"} >
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
        </KeyboardAvoidingView>

        <ScrollView contentContainerStyle={[ styles.selectImgBox, imgs.length === 0 && styles.selectExtra ]}>  
          {
            imgs.map((item, key) => (
                <TouchableOpacity key={key} onPress={() => { navigation.navigate('ImageView', { media: this.state.imgs }) }}>
                  <Image source={{ uri: item.photo }} style={styles.img} />
                </TouchableOpacity>
            ))
          }
          <View style={styles.selectPhotoBox}><SelectPhoto addPhoto={true} handleAddPic={this.handleAddPic} /></View>
        </ScrollView>
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default connect(
  state => getQuestionStatusSelector(state),
)(PutQuestionDetail);