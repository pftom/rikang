import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

//import action constants
import { GET_QUESTIONS } from '../../../constants/'
//import selector
import { getQaSelector } from '../../../selectors/'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class QaScreen extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch, token } = this.props;

    dispatch({ type: GET_QUESTIONS, payload: { token }});
  }

  render() {
    const { questions, navigation, token } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { navigation.navigate('QuestionDetail', { id: questions.getIn(['results', '0', 'id']), token } ) } }>
          <Text>{questions && questions.getIn(['results', '0', 'title'])}</Text>
        </TouchableOpacity>
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
