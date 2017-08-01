import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

//impor style from styles
import { SelectBoxStyle as styles } from '../styles/';

import { Picker } from 'antd-mobile';

import { selectDep } from '../TabOne/data/';

const RenderLeft = props => (
  <TouchableOpacity onPress={props.onClick}>
    <View style={[ styles.box]}>
      <Text style={styles.title}>{props.titleLeft}</Text>
      <Image source={require('./img/SelectDown.png')} />
    </View>
  </TouchableOpacity>
);

const RenderRight = props => (
  <TouchableOpacity onPress={props.onClick}>
    <View style={[ styles.box ]}>
      <Text style={styles.title}>{props.titleRight}</Text>
      <Image source={require('./img/Select.png')} />
    </View>
  </TouchableOpacity>
);


class SelectBox extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      pickerValue: ['全部科室', '全部科室'],
      sortValue: ['默认排序'],
    };
  }

  handleLeftChange = (v) => {
    this.props.handleSelectDep(v[1]);
    this.setState({
      pickerValue: v,
    });
  }

  handleRightChange = (v) => {
    this.props.handleSelectSort(v);

    this.setState({
      sortValue: v,
    });
  } 

  render() {

    return (
      <View style={[ styles.container, this.props.selectStyle ]}>
        <Picker
          data={selectDep}
          title="选择科室"
          cols={2}
          value={this.state.pickerValue}
          onChange={v => { this.handleLeftChange(v) }}
        >
          <RenderLeft titleLeft={this.state.pickerValue[1]}  />
        </Picker>

        <Picker
          data={this.props.sortData}
          title="排序方式"
          cols={1}
          value={this.state.sortValue}
          onChange={v => { this.handleRightChange(v) }}
        >
          <RenderRight titleRight={this.state.sortValue[0]}/>
        </Picker>
        
      </View>
    )
  }
}

export default SelectBox;