import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  ScrollView, 
  StatusBar,
  Animated,
  Image,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { GET_SINGLE_POST } from '../../../constants/';

//import selector for computing data
import { getPostSelector } from '../../../selectors/';

import Header from '../../common/Header';

//import post style
import { PostDetailStyle as styles } from '../../styles/'

//need to html render in the end
import HTMLView from 'react-native-html-render';


class PostDetail extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    }
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    dispatch({ type: GET_SINGLE_POST, payload: { token, id }});
  }

  render() {
    const { post, navigation } = this.props;

    console.log('post', post && post.toJS());

    let animatedOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 60, 100],
      outputRange: [0, 0.6, 1],
    });

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.scrollBox}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={16}
            onScroll={
              Animated.event(
                [{nativeEvent: {contentOffset: {y: this.state.scrollY }}}]
              )
            }
          >
            {
              post && (
                <View style={styles.postBox}>
                  <Image source={{ uri: post.get('photo')}} style={styles.photo}>
                    <View style={styles.titleBox}>
                      <Text style={styles.title}>{post.get('title')}</Text>
                    </View>
                  </Image>
                  <Text style={styles.body}>{post.get('body')}</Text>
                </View>
              )
            }
          </ScrollView>
        </View>
        <Header 
          headerText="文章详情"
          logoLeft={true} 
          shareHeart={true}
          share={true}
          animatedOpacity={animatedOpacity}
          navigation={navigation} 
          showGradient={true} 
        />
      </View>
    )
  }
}

export default connect(
  state => getPostSelector(state),
)(PostDetail);