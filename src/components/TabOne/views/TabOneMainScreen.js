import React, { PureComponent } from 'react';
import { 
  View,
  Text,
  NetInfo,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';

//import selector to get selected data
import { getHomeSelector } from '../../../selectors/';
import LoginStatusMessage from '../../LoginStatusMessage';
import AuthButton from '../../AuthButton';

//import async actions constants
import { GET_DOCTORS, GET_POSTS } from '../../../constants/'

//impor style from styles
import { MainScreenStyle as styles } from '../../styles/';

class HomeMainScreen extends PureComponent {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    const { token, dispatch } = this.props;
    dispatch({ type: GET_DOCTORS, payload: { token } });
    dispatch({ type: GET_POSTS, payload: { token } });
  }

  render() {
    const { loadingError, doctors, posts, navigation, token, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Text>loading data ....</Text>
        {
          doctors && (
            <TouchableWithoutFeedback onPress={() => {navigation.navigate('DoctorDetail', { id: doctors.getIn(['results', '0', 'id']), token })}}>
              <View>
                <Text>doctor: {doctors.getIn(['results', '0', 'name'])}</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        }
        {
          posts && (
            <TouchableWithoutFeedback onPress={() => { navigation.navigate('PostDetail', { id: posts.getIn(['results', '0', 'id']), token })}}>
              <View>
                <Text>posts: {posts.getIn(['results', '0', 'title'])}</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        }
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('NearHospital', { token })}}>
          <View>
            <Text>Go to nearby hospital</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

HomeMainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default connect(
  (state) => getHomeSelector(state),
)(HomeMainScreen);
