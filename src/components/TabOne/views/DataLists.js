import React, { Component } from 'react';
import { Dimensions, Animated } from 'react-native';
import ScrollViewTabView from './ScrollViewTabView';

import RefreshListView from '../../common/RefreshListView';
import DefaultTabBar from './DefaultTabBar';
import px2dp from '../../../util/index';

const { width, height } = Dimensions.get('window');

const MAIN_HEIGHT = height - px2dp(90);

const TAB = [
  {
    id: 0,
    title: '党建活动',
  }, 
  {
    id: 1,
    title: '时事新闻'
  }
];

class DataLists extends Component {

  render() {
    const { dataSource, navigation, headHeight, getRefs   } = this.props;
    return (
      <ScrollViewTabView
              renderTabBar={() => <DefaultTabBar  />}
            >
        {
          TAB.map(item => (
            <RefreshListView
              ref={getRefs}
              key={item.id}
              tabLabel={TAB[item.id].title}
              dataSource={dataSource[item.id]}
              navigation={navigation}
            />
          ))
        }
      </ScrollViewTabView>
    )
  }
}

export default DataLists;