import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

//import util px2dp for screen adapt
import px2dp from '../utils/px2dp';


//user section screen
import LoginScreen from '../components/LoginScreen';
import Register from '../components/Register';
import PatientPersonInfo from '../components/TabThree/views/PatientPersonInfo';
import Setting from '../components/TabThree/views/Setting';

/*
 *
 * 
 * home section screen
*/
import TabBarNavigation from './TabBarNavigation';
import TabTwoNavigation from '../components/TabTwo/views/TabTwoMainScreen';
import DoctorDetail from '../components/TabOne/views/DoctorDetail';
import PostDetail from '../components/TabOne/views/PostDetail';
//nearby hospital
import NearHospital from '../components/TabOne/views/NearHospital';
//single hospital
import HospitalDetail from '../components/TabOne/views/HospitalDetail';
import HospitalList from '../components/TabOne/views/HospitalList';
import HospitalListItem from '../components/TabOne/views/HospitalListItem';
//doctor detail info
import DoctorDetailInfo from '../components/TabOne/views/DoctorDetailInfo';
import DoctorList from '../components/TabOne/views/DoctorList';

import ProfileScreen from '../components/ProfileScreen';
import Practice from '../components/practice';


/*
 *
 * 
 * qa section screen
*/
import QuestionDetail from '../components/TabTwo/views/QuestionDetail';
import AnswerDetail from '../components/TabTwo/views/AnswerDetail';
import PutQuestion from '../components/TabOne/views/PutQuestion';
import PutQuestionDetail from '../components/TabOne/views/PutQuestionDetail';
import ImageView from '../components/TabTwo/views/ImageView';
import CommentList from '../components/TabTwo/views/CommentList';



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
    TabTwoNavigation: { screen: TabTwoNavigation },

    PostDetail: { screen: PostDetail },


    NearHospital: { screen: NearHospital },
    HospitalDetail: { screen: HospitalDetail },
    HospitalList: { screen: HospitalList },
    HospitalListItem: { screen: HospitalListItem },

    DoctorDetailInfo: { screen: DoctorDetailInfo },
    DoctorList: { screen: DoctorList },
    DoctorDetail: { screen: DoctorDetail },

    UserNavigator: { screen: UserNavigator },

    Profile: { screen: ProfileScreen },
    PatientPersonInfo: { screen: PatientPersonInfo },
    Setting: { screen: Setting },

    QuestionDetail: { screen: QuestionDetail },
    PutQuestionDetail: { screen: PutQuestionDetail },
    AnswerDetail: { screen: AnswerDetail },
    PutQuestion: { screen: PutQuestion },
    ImageView: { screen: ImageView },
    CommentList: { screen: CommentList },

  },
  {
    navigationOptions: {
      headerLeft: null,
      headerStyle: {
        position: 'absolute',
        opacity: 0,
      }
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
