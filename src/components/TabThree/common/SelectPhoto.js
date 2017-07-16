import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet, Alert, PixelRatio, Dimensions  } from 'react-native';

//import image picker component
import ImagePicker from 'react-native-image-picker';

//import style 
import { SelectPhotoStyle as styles } from '../styles/';

const options = {
  title: null,
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '从相册选择照片',
  quality: 0.75,
  maxWidth: 500,
  maxHeight: 500,
  allowsEditing: true,
  nodata: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

const width = Dimensions.get('window').width;

class SelectPhoto extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      avatarSource: null,
    }

  }

  selectPhotoTapped = () => {
    
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        const alertMessage = '请检查网络连接，然后再试一下';
        Alert.alert(
            '上传头像出错了哦',
            alertMessage,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: response.uri,
        });
      }
    });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.selectPhotoTapped}>
        <View style={styles.avatarBox}>
          {
            this.state.avatarSource
            ? (
              <Image style={styles.avatar} source={{ uri: this.state.avatarSource }} />
            )
            : (
              <Text style={styles.avatarText}>换头像</Text>
            )
          }
        </View>
      </TouchableOpacity>
    )
  }
}


export default SelectPhoto;