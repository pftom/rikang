import React, { PureComponent } from 'react';
import { 
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

//import selector to get selected data
import { getTabOneMainScreenSelector } from '../../../selectors/TabOneMainSelector';
import LoginStatusMessage from '../../LoginStatusMessage';
import AuthButton from '../../AuthButton';

//import async actions constants
import { GET_DOCTORS } from '../../../constants/'

//impor style from styles
import { MainScreenStyle as styles } from '../../styles/';

class HomeMainScreen extends PureComponent {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    const { token, dispatch } = this.props;
    dispatch({ type: GET_DOCTORS, payload: token });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>loading data ....</Text>
      </View>
    )
  }
}

HomeMainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default connect(
  (state) => getTabOneMainScreenSelector(state),
)(HomeMainScreen);
