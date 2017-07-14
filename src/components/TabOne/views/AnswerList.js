import React, { PureComponent } from 'react';
import {
  ScrollView,
  View,
  Text,
  Animated,
} from 'react-native';

//
import px2dp from '../../../utils/px2dp';

const lists = [];
for (let i = 0; i < 40; i++) {
  lists.push(i);
}

class AnswerList extends PureComponent {

  constructor(props) {
    super(props)
      this.state = {
        scrollY: new Animated.Value(0)
      }
  }

  renderList = () => {
    return lists.map((item, key) => (
      <View style={{ height: 46, backgroundColor: 'gray' }} key={key}>
        <Text>{item}</Text>
      </View>
    ))
  }

  render() {

    let scrollY = this.state.scrollY.interpolate({
      inputRange: [0, 189, 189],
      outputRange: [0, 189, 189+1]
    })

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          onScroll={Animated.event(
             [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
           )}
          scrollEventThrottle={16}
        >
          <Animated.View style={{
              paddingBottom: 81 + px2dp(46),
              transform: [{translateY: scrollY}]
            }}>
              {this.renderList()}
            </Animated.View>
        </ScrollView>
      </View>
    )
  }
}

export default AnswerList;