import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//impor style from styles
import { SelectBoxStyle as styles } from '../styles/';


class SelectBox extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activateLeft: false,
      activateRight: false,
    };
  }

  handleLeftTouch = () => {
    this.setState({
      activateLeft: !this.state.activateLeft,
    });
  }

  handleRightTouch = () => {
    this.setState({
      activateRight: !this.state.activateRight,
    });
  }
  
  render() {
    const { titleLeft, titleRight } = this.props;

    return (
      <View style={[ styles.container, this.props.selectStyle ]}>
        <TouchableOpacity onPress={() => { this.handleLeftTouch() }}>
          <View style={[ styles.box]}>
            <Text style={styles.title}>{titleLeft}</Text>
            <Image source={require('./img/SelectDown.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.handleRightTouch() }}>
          <View style={[ styles.box ]}>
            <Text style={styles.title}>{titleRight}</Text>
            <Image source={require('./img/Select.png')} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SelectBox;