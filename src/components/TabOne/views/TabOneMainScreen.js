import React, { PureComponent } from 'react';
import { 
  View,
  Text,
  NetInfo,
  TouchableWithoutFeedback,
  Image,
  SectionList,
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';


//import selector to get selected data
import { getHomeSelector } from '../../../selectors/';
import LoginStatusMessage from '../../LoginStatusMessage';
import AuthButton from '../../AuthButton';

//import async actions constants
import { GET_DOCTORS, GET_POSTS } from '../../../constants/'

//impor style from styles
import { MainScreenStyle as styles } from '../../styles/';

//import data
import {
  headerTitleData,
  nearbyDoctor,
  healthPost,
} from '../data/TabOneMainScreen_data.js';

//import headerTitle component
import HeaderSection from './HeaderSection';
//import nearby doc
import NearByDoctorSection from './NearByDoctorSection';

class HomeMainScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { token, dispatch } = this.props;
    dispatch({ type: GET_DOCTORS, payload: { token } });
    dispatch({ type: GET_POSTS, payload: { token } });

  }

  renderSectionComponent(item, right) {
    //item represent data should be renderItem
    // right represent show right navigate label

    return (
      <View style={styles.sectionBox}>
        <View style={styles.sectionLeftBox}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            colors={['#23BCBB', '#45E994']}
            style={styles.sectionGradient}
          />
          <Text style={styles.sectionTitle}>{item.key}</Text>
        </View>
        {
          right && (
            <View style={styles.sectionRightBox}>
              <Text style={styles.seeAll}>查看全部</Text>
              <Image source={require('../img/rightArrow.png')} style={styles.sectionImg} />
            </View>
          )
        }
      </View>
    )
  }

  render() {
    const { loadingError, doctors, posts, navigation, token, dispatch } = this.props;


    return (
      <View style={styles.container}>
        <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            colors={['#23BCBB', '#45E994']}
            style={styles.linearGradient}>
        </LinearGradient>
        <SectionList
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={10}
          ListHeaderComponent={() => <HeaderSection navigation={navigation} headerTitleData={headerTitleData} />}
          sections={[
            { data: [{ nearbyDoctor, key: 1 }], key: '推荐医生', renderItem: ({ item }) => <NearByDoctorSection itemnavigation={navigation} nearbyDoctor={item.nearbyDoctor} /> },
            { data: healthPost, key: '健康咨询', renderItem: ({ item }) => <Text key={item.title} style={styles.text}>{item.title}</Text> },
          ]}
          renderSectionHeader={({ section }) => {
            if (section.key === '推荐医生') {
              return this.renderSectionComponent(section, true);
            }

            if (section.key === '健康咨询') {
              return this.renderSectionComponent(section, false);
            }

            return null;
          }}
        />
      </View>
    )
  }
}

HomeMainScreen.navigationOptions = {
  header: null,
};

export default connect(
  (state) => getHomeSelector(state),
)(HomeMainScreen);
