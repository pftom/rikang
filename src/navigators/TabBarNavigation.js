import React from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import TabOneNavigation from '../components/TabOne/views/TabOneMainScreen';
import TabTwoNavigation from '../components/TabTwo/views/TabTwoMainScreen';
import TabThreeNavigation from '../components/TabThree/views/TabThreeMainScreen';


const routeConfigs = {
  TabOneNavigation: {
      screen: TabOneNavigation,
      navigationOptions: {
        tabBarLabel: '日康之家',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={ focused ? require('./img/homeBarActive.png') : require('./img/homeBar.png') }
                style={[styles.icon1]}
            />
  )
      }
  },
  TabTwoNavigation: {
      screen: TabTwoNavigation,
      navigationOptions: {
        tabBarLabel: '日康知道',
        tabBarIcon: ({ focused, tintColor }) => ( <
            Image source = { focused ? require('./img/qaBarActive.png') : require('./img/qaBar.png') }
            style = {
                [styles.icon2]
            }
            />
        )
      }
  },
  TabThreeNavigation: {
      screen: TabThreeNavigation,
      navigationOptions: {
        tabBarLabel: '我的账号',
        tabBarIcon: ({ focused, tintColor }) => {
            return (
                <Image
                    source={focused ? require('./img/userBarActive.png') : require('./img/userBar.png') }
                    style={[styles.icon3]}
                />
            )
        }
      }

  },
};

const tabNavigatorConfig = {
    tabBarOptions: {
        activeTintColor: '#09C79C',
        inactiveTintColor: '#000',
        indicatorStyle: {
            backgroundColor: 'transparent',
        },
        style: {
            height: 60,
            borderColor: '#D2D2D2',

            backgroundColor: 'rgba(245, 246, 247, 0.98)',
            paddingTop: 4.7,
            paddingLeft: 25.3,
            paddingRight: 24,
            ...Platform.select({
                ios: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    position: 'absolute',
                },
                android: {
                    bottom: 0,
                },
            })
        },
        tabStyle: {
            backgroundColor: 'transparent',
        },
        labelStyle: {
            fontFamily: 'PingFangSC-Thin',
            fontSize: 12,
            top: 0.3,
        }
    },
    backBehavior: 'none',
    lazy: true,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,

};

const styles = StyleSheet.create({
    icon1: {
        width: 34,
        height: 31,
    },
    icon2: {
        width: 34,
        height: 34,
    },
    icon3: {
        width: 30,
        height: 30,
    }
})

const TabBarNavigation = TabNavigator(routeConfigs, tabNavigatorConfig);

export default TabBarNavigation;