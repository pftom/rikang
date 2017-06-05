import React, { Component } from 'react';
import { View,  StyleSheet,  ScrollView } from 'react-native';
import SinglePicker from 'mkp-react-native-picker';

import Header from '../../common/Header';
import PersonDataItem from './DataItem';


const DATA = [
  {
    id: 1,
    title: '头像',
    avatar: true,
  },
  {
    id: 2,
    title: '姓名',
    content: '周思达',
  },
  {
    id: 3,
    title: '性别',
    content: '男',
  },
  {
    id: 4,
    title: '身份',
    content: '共青团员',
  },
  {
    id: 5,
    title: '学院',
    content: '计算机',
  },
  {
    id: 6,
    title: '专业',
    content: '软件工程',
  },
  {
    id: 7,
    title: '学号',
    content: '89757'
  }
];

const SWITCH = {
  ['3']: [
    {
      key: 1,
      value: '男',
    },
    {
      key: 2,
      value: '女',
    }
  ],
  ['4']: [
    {
      key: 1,
      value: '共青团员',
    },
    {
      key: 2,
      value: '共产党员',
    },
    {
      key: 3,
      value: '群众'
    },
  ],
  ['6']: [
    {
      key: 1,
      value: '计算机',
    },
    {
      key: 2,
      value: '软件',
    },
    {
      key: 3,
      value: '信安',
    },
    {
      key: 4,
      value: '网络'
    }

  ]
};

class PersonData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ["姓名"]: null,
      ["性别"]: '男',
      ["身份"]: '共青团员',
      ["学院"]: '计算机学院',
      ["专业"]: '卓越软件1402',
      ["学号"]: '123456',
      activeId: 3,
      options: SWITCH[3],
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.showSwitchPage = this.showSwitchPage.bind(this);
  }

  handleTextChange(text, title) {
    this.setState({ [title]: text });
  }

  showSwitchPage(id) {
    this.setState({ 
      activeId: id,
      options: SWITCH[id],
    });
    this.singlePicker.show();
  }

  
  render() {
    let itemOne = [];
    let itemTwo = [];
    DATA.map((item, key) => {
      if (key<=2) {
        itemOne.push(<PersonDataItem {...item}
                        DATA={DATA}
                        {...this.state} 
                        key={item.id}
                        handleTextChange={this.handleTextChange}
                        showSwitchPage={this.showSwitchPage}
                        />)
      } else {
        itemTwo.push(<PersonDataItem
                        DATA={DATA} 
                        {...item} 
                        key={item.id} 
                        {...this.state} 
                        handleTextChange={this.handleTextChange} 
                        showSwitchPage={this.showSwitchPage}
                        />)
      }
    });
    return (
      <ScrollView style={styles.container}>
        <View style={styles.itemContainer}>{itemOne}</View>
        <View style={styles.itemContainer}>{itemTwo}</View>
        <SinglePicker
            lang="zh-CN"
            ref={ref => this.singlePicker = ref}
            onConfirm={(option)=>{
                this.setState({ [DATA[this.state.activeId - 1].title]: option.value })
            }}
            style={styles.singlePicker}
            options={this.state.options}
        />
      </ScrollView>
    )
  }
}

PersonData.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        logoLeft={require('../../TabOne/img/back.png')}
        headerText="个人档案"
        navigation={navigation}
      />
    </View>
  ),
})

const styles = StyleSheet.create({
  headerTitle: {
    top: -10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f6f7',
  },
  itemContainer: {
    shadowOffset: { x: 0, y: 5 },
    shadowColor: '#C7C7C7',
    shadowRadius: 40,
    shadowOpacity: 0.32,
    backgroundColor: '#FFF',
    marginTop: 20,
    overflow: 'hidden',
  },
  singlePicker: {
    backgroundColor: '#f5f6f7',
  }
})

export default PersonData;