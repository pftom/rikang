import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';



//import style
import { QuestionListStyle as styles } from '../styles/';

//import tag box
import { TagBox } from '../../common/';


class QuestionListItem extends PureComponent {
  
  render() {
    const { navigation, token, item } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => { navigation.navigate('QuestionDetail', { id: item.key, token })}} style={styles.touchBox}>
        <View style={styles.container}>
            <View style={styles.QuestionBox}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.tagContainer}>
                <TagBox 
                  star={true} 
                  item={item} 
                  btnText={"关注"}
                  navigation={navigation}
                  token={token}
                />
              </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default QuestionListItem;