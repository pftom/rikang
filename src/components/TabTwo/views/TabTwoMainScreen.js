import React, { PureComponent } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  
 } from 'react-native';
import { connect } from 'react-redux';

//import action constants
import { GET_QUESTIONS } from '../../../constants/'
//import selector
import { getQaSelector } from '../../../selectors/'


//import header
import Header from '../../common/Header';

//import styles
import { QaMainScreenStyle as styles } from '../styles/'

class QaScreen extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch, token } = this.props;

    // dispatch({ type: GET_QUESTIONS, payload: { token }});
  }

  render() {
    const { questions, navigation, token } = this.props;
    return (
      <View style={styles.container}>
        <Header 
          navigation={navigation}
          showGradient={true}
        />
      </View>
    )
  }
}

QaScreen.navigationOptions = {
  title: 'Qa Screen',
};

export default connect(
  state => getQaSelector(state),
)(QaScreen);
