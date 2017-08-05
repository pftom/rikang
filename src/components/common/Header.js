import React, { PureComponent } from 'react';
import { Image, Alert, Text, Animated, Platform, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import px2dp from '../../utils/px2dp';
import { Toast } from 'antd-mobile';

//import constant
import { CLEAR, CLEAR_FAV_STATE, CLEAR_SUBMIT_STATE } from '../../constants/'

const width = Dimensions.get('window').width;

class Header extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      faved: false,
      starred: false,
    }
  }

  componentDidMount() {
    const { whetherFaved } = this.props;

    this.setState({
      faved: whetherFaved,
    });
  }

  successToast(msg, settingSubmit, isSubmit) {
    const { dispatch, navigation } = this.props;


    if (settingSubmit && isSubmit) {
      navigation.goBack();
      dispatch({ type: CLEAR_SUBMIT_STATE });
    }

    dispatch({ type: CLEAR_FAV_STATE });
    Toast.success(msg, 1);
  }

  // showToast() {
  //   const { dispatch } = this.props;
  //   this.setState({
  //     faved: false,
  //   });

  //   dispatch({ type: CLEAR_FAV_STATE });
  //   Toast.info('已取消收藏', 1);
  // }

  loadingToast(msg) {
    Toast.loading(msg, 1);
  }

  failToast(msg, settingSubmit, isSubmit) {
    const { dispatch, navigation } = this.props;
    dispatch({ type: CLEAR_FAV_STATE });
    if(settingSubmit && isSubmit) {
      navigation.goBack();
      dispatch({ type: CLEAR_SUBMIT_STATE });
    }
    Toast.fail(msg, 1);
  }

  componentWillReceiveProps(nextProps) {
    const { httpStatus, submitProfileError, submitProfileSuccess } = nextProps;

    if (nextProps.whetherFaved !== this.props.whetherFaved) {
      this.setState({
        faved: nextProps.whetherFaved,
      })
    }

      if(httpStatus) {
        const {
        isStarSingleQuestion,
        starSingleQuestionSuccess,
        starSingleQuestionError,

        isCancelStarSingleQuestion,
        cancelStarSingleQuestionSuccess,
        cancelStarSingleQuestionError,
      } = httpStatus;
      if (isStarSingleQuestion || isCancelStarSingleQuestion) {
        if (isStarSingleQuestion) {
          this.loadingToast('收藏中...');
        } else {
          this.loadingToast('取消收藏中...');
        }
      }

      if (starSingleQuestionSuccess || cancelStarSingleQuestionSuccess) {
        if (starSingleQuestionSuccess) {
          this.successToast('收藏成功');
        } else {
          this.successToast('已取消收藏');
        }
      }

      if (starSingleQuestionError || cancelStarSingleQuestionError) {
        this.failToast('收藏失败');
      }
    }

    //handle profile submit
    if (submitProfileError) {
      this.failToast('网络无连接', true, true);
    }

    if (submitProfileSuccess) {
      this.successToast('设置成功', true, true)
    }
  }

  handleFav = () => {
    if (this.state.faved) {
      this.props.handleCancelFav();
    } else {
      this.props.handleAddFav();
    }
  }

  handleGoBack = () => {
    const { navigation, settingSubmit } = this.props;

    if (settingSubmit) {
      this.props.handleSubmitProfile();
    } else {
      navigation.goBack();
    }
  }

  render() {
    console.log('state', this.state);
    const props = this.props;
    let style = null;
    // if (Platform.OS === 'android' && !!props.logoLeft)  {
    //   style = {
    //     marginLeft: -34,
    //   }
    // }


    const rightBox = (
      <View style={ !props.onlyText && styles.rightBox}>
        {props.shareHeart && <TouchableOpacity
                                onPress={() => { this.handleFav() } }
                                >
                                <Image source={props.shareHeart && ( this.state.faved ? require('./img/faved.png') : require('./img/shareHeart.png'))} style={styles.shareHeart} />
                              </TouchableOpacity>}
        {props.shareStar && <TouchableOpacity
                                onPress={() => { this.handleFav() } }
                                >
                                <Image source={props.shareStar && ( this.state.faved ? require('./img/starred.png') : require('./img/fav.png') ) } style={styles.shareStar} />
                              </TouchableOpacity>}

        {props.phone && <TouchableOpacity
                              onPress={() => { console.log('share')} }
                              >
                              <Animated.Image source={props.phone && require('./img/phone.png')} style={[ styles.shareStar, styles.phone, { opacity: props.animatedOpacity }]} />
                            </TouchableOpacity>}

      {props.share && <TouchableOpacity
                              onPress={() => { console.log('share')} }
                              >
                              <Image source={props.share && require('./img/share.png')} style={ [ styles.share]} />
                            </TouchableOpacity>}


      {props.searchIcon && <TouchableOpacity
                              onPress={() => { console.log('share')} }
                              >
                              <Image source={props.searchIcon && require('./img/search.png')} style={ [ styles.share, styles.searchIcon ]} />
                            </TouchableOpacity>}

      {props.navigate && <TouchableOpacity
                              onPress={() => { console.log('share')} }
                              >
                              <Animated.Image source={props.navigate && require('./img/navigate.png')} style={ [ styles.share, styles.navigate, { opacity: props.animatedOpacity }  ]} />
                            </TouchableOpacity>}
      </View>
    )


    const leftBox = (
      <View style={[ styles.leftBox ]}>
          {props.logoLeft && <TouchableOpacity
                                onPress={() => { this.handleGoBack() }}
                                >
                                <Image source={props.logoLeft && require('./img/back.png')} style={styles.logoLeft} />
                              </TouchableOpacity>}
          {
            props.leftImg && (
              <View style={styles.smallAvatarBox}>
                <Animated.Image source={{ uri: props.leftImg.get('avatar') }} style={ [ styles.smallAvatar, { opacity: props.imgOpacity }] }/>
              </View>
            )
          }
        </View>
    )

    return (
        <View style={[ props.animatedOpacity && styles.containerBox, props.headerStyle, props.miuiHeader && styles.containerBox ]}>
          <Animated.View style={props.animatedOpacity && [ styles.containerBox, { opacity: props.animatedOpacity } ]}>
            {
                props.showGradient && (
                  <LinearGradient
              start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
              colors={['#23BCBB', '#45E994']}
              style={[ styles.linearGradient, props.gradientStyle ]}>
              {
                leftBox
              }
              <View style={styles.headerTextBox}><Animated.Text style={[styles.headerText, props.logoLeft && styles.headerExtraStyle, props.headerTextStyle, style , props.animatedOpacity && { opacity: props.animatedOpacity}]}>{props.headerText}</Animated.Text></View>
              {
                rightBox
              }
          </LinearGradient>
                )
          }
          </Animated.View>

          {
            (!props.showGradient || props.animatedOpacity) && (
              <View style={styles.container}>
                {
                  leftBox
                }
                {
                  !props.animatedOpacity && (
                    <View style={styles.headerTextBox}><Text style={[styles.headerText, style, props.logoLeft && styles.headerExtraStyle ]}>{props.headerText}</Text></View>
                  )
                }
                {
                  rightBox
                }
              </View>
            )
          }
        </View>
    )
  }

}

const styles = StyleSheet.create({
  containerBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  container: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: px2dp(81),
  },
  linearGradient: {
    height: px2dp(81),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    ...Platform.select({
      ios: {
        shadowColor: '#50E3C2',
        shadowOffset: { width: 0, height: 5},
        shadowRadius: 10,
        shadowOpacity: 0.5,
      },
    })
  },
  headerTextBox: {
    height: px2dp(81),
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(24),
    color: '#FFF',
    textAlign: 'center',
    ...Platform.select({
      ios: {
        top: px2dp(34),
      },
      android: {
        fontSize: px2dp(24),
        top: px2dp(34),
      }
    }),
    height: px2dp(33),
    backgroundColor: 'transparent',
  },
  headerExtraStyle: {
    ...Platform.select({
      ios: {
        left: px2dp(-13),
      },
    }),
  },
  logoLeft: {
    ...Platform.select({
      ios: {
        marginLeft: px2dp(23),
        marginTop: px2dp(40),
      },
      android: {
        marginLeft: px2dp(23),
        marginTop: px2dp(41),
      },
    }),
  },
  rightBox: {
    flexDirection: 'row',
    height: px2dp(81),
    ...Platform.select({
      android: {
         width: px2dp(36),
      }
    })
  },
  share: {
    marginLeft: px2dp(24),
    marginRight: px2dp(24),
    top: px2dp(42),
  },
  searchIcon: {
    top: px2dp(39),
  },
  phone: {
    top: px2dp(40),
  },
  shareHeart: {
    top: px2dp(42),
    ...Platform.select({
      ios: {
        right: px2dp(20),
      }
    })
  },
  shareStar: {
    top: px2dp(39),
    ...Platform.select({
      ios: {
        right: px2dp(20),
      }
    })
  },
  navigate: {
    top: px2dp(40),
  },

  smallAvatarBox: {
    height: px2dp(42),
    width: px2dp(42),
    borderRadius: px2dp(21),
    marginLeft: px2dp(65),
    marginTop: px2dp(-31),
  },
  smallAvatar: {
    height: px2dp(42),
    width: px2dp(42),
    borderRadius: px2dp(21),
  },
  logoShareBox: {
    left: px2dp(222),
    top: px2dp(41),
  },
})

export default Header;