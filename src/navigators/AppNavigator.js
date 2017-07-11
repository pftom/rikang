import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

//user section screen
import LoginScreen from '../components/LoginScreen';
import Register from '../components/Register';

/*
 *
 * 
 * home section screen
*/
import TabBarNavigation from './TabBarNavigation';
import DoctorDetail from '../components/TabOne/views/DoctorDetail';
import PostDetail from '../components/TabOne/views/PostDetail';
//nearby hospital
import NearHospital from '../components/TabOne/views/NearHospital';
//single hospital
import HospitalDetail from '../components/TabOne/views/HospitalDetail';
//doctor detail info
import DoctorDetailInfo from '../components/TabOne/views/DoctorDetailInfo';

import ProfileScreen from '../components/ProfileScreen';
import Practice from '../components/practice';


/*
 *
 * 
 * qa section screen
*/
import QuestionDetail from '../components/TabTwo/views/QuestionDetail';
import AnswerDetail from '../components/TabTwo/views/AnswerDetail';



//register and login logic navigator
export const UserNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Register: { screen: Register },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    }
  }
);

// export const MainNavigator = TabNavigator({

// })

export const AppNavigator = StackNavigator({
    TabBarNavigation: { screen: TabBarNavigation },
    DoctorDetail: { screen: DoctorDetail },
    PostDetail: { screen: PostDetail },
    NearHospital: { screen: NearHospital },
    HospitalDetail: { screen: HospitalDetail },
    DoctorDetailInfo: { screen: DoctorDetailInfo },

    UserNavigator: { screen: UserNavigator },

    Profile: { screen: ProfileScreen },

    QuestionDetail: { screen: QuestionDetail },
    AnswerDetail: { screen: AnswerDetail },
  },
  {
    navigationOptions: {
      headerLeft: null,
    },
    initialRouteName: 'TabBarNavigation',
  },
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.get('nav')
});

export default connect(mapStateToProps)(AppWithNavigationState);
