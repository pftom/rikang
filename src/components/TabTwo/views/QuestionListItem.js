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
              <TagBox star={true} item={item}/>
            </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default QuestionListItem;