import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import TabOneNavigation from '../components/TabOne/views/TabOneMainScreen';
import TabTwoNavigation from '../components/TabTwo/views/TabTwoMainScreen';
import TabThreeNavigation from '../components/TabThree/views/TabThreeMainScreen';


const routeConfigs = {
  TabOneNavigation: { 
      screen: TabOneNavigation,
      navigationOptions: {
        tabBarLabel: '日康之家',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./img/homeBar.png')}
                style={[styles.icon1, { tintColor: tintColor }]}
            />
  )
      }
  },
  TabTwoNavigation: { 
      screen: TabTwoNavigation,
      navigationOptions: {
        tabBarLabel: '日康知道',
        tabBarIcon: ({ tintColor }) => ( <
            Image source = { require('./img/qaBar.png') }
            style = {
                [styles.icon2, { tintColor: tintColor }]
            }
            />
        )
      }
  },
  TabThreeNavigation: { 
      screen: TabThreeNavigation,
      navigationOptions: {
        tabBarLabel: '我的账号',
        tabBarIcon: ({ tintColor}) => (
            <Image
            source={require('./img/userBar.png')}
            style={[styles.icon3, { tintColor: tintColor }]}
            />
        )
      }
  
  },
};

const tabNavigatorConfig = {
    tabBarOptions: {
        activeTintColor: '#D0011B',
        inactiveTintColor: 'black',
        style: {
            height: 59.5,
            borderColor: '#E0E0E0',
            borderWidth: 0.5,
            backgroundColor: '#F5F6F7',
            paddingTop: 4.7,
            paddingLeft: 25.3,
            paddingRight: 24,
        },
        labelStyle: {
            fontFamily: 'PingFangSC-Light',
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
        width: 28,
        height: 30.71,
    },
    icon2: {
        width: 30,
        height: 29,
    },
    icon3: {
        width: 26,
        height: 30,
    }
})

const TabBarNavigation = TabNavigator(routeConfigs, tabNavigatorConfig);

export default TabBarNavigation;