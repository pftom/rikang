import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  ScrollView, 
  StatusBar,
  Animated,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { 
  GO_HOME,
} from '../../../constants/';

// //import selector for computing data
// import { getPostSelector } from '../../../selectors/';

//import post style
import { PaySuccessStyle as styles } from '../../styles/';



class PaySuccess extends PureComponent {

  handleBtn = (kind) => {
    const { navigation, dispatch } = this.props;
    if (kind === 'home') {
      navigation.navigate('TabBarNavigation')
    } else if (kind === 'doctor') {
      navigation.goBack();
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Image source={require('../img/submitSuccess.png')} />
          <Text style={styles.title}>支付成功</Text>
          <Text style={styles.hintText}>等待医生接受订单，您可以在当天任何时间继续进行咨询，只需进入“我的帐号-我的咨询”即可。</Text>

          <TouchableWithoutFeedback onPress={() => { this.handleBtn('doctor') }} style={[styles.buttonContainer]}>
            <View style={styles.buttonBox}>
              <Text style={[ styles.content, this.props.textStyle ]}>返回医生</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.extraButtonContainer} />
          <TouchableWithoutFeedback onPress={() => { this.handleBtn('home') }} style={[ styles.buttonContainer, ]}>
              <View style={[ styles.buttonBox, styles.extraButtonBox ]}>
              <Text style={[ styles.content, styles.extraContent ]}>返回首页</Text>
            </View>

          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

export default connect()(PaySuccess);