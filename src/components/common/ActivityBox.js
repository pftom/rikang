import React, { Component } from 'react';
import { Text, Image,  View, TouchableOpacity, ListView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import RefreshListView from './RefreshListView';
import Header from './Header';
import ModalActivity from './ModalActivity';

const STATUS_ITEMS = [
  {
    id: 1,
    pic: 'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    title: "“红歌唱响东华”-第5届唱红歌比赛",
    time: "2017年5月1日",
    already: 24,
    status: false,
    content: "为深入推动“大众创业、万众创新”，配合国家“十三五”规划提出的“支持港澳中小微企业和青年人在内地发展创业”和“支持内地与港澳开展创新及科技合作”，由香港中国商会牵头，经纬集团发起并联合多家香港和海内外华侨华人相关商协会成立“紫荆谷发展中心”，得到了香港各界和国家有关部门的大力支持以及包括上海交通大学在内的国家11所顶尖高等院校的全方位合作。由经纬集团捐资，在“紫荆谷发展中心”的统筹下与国家11所著名高等院校合作，依托高校各自的学科优势，在11所高校设立“紫荆谷创新创业发展辅导中心”，为港澳台青年、海外华人华侨青年，包括内地的部分“创二代”提供一个学习、交流、合作的平台；邀请专家学者和企业家包括政府官员，对他们进行针对性的免费辅导。为深入推动“大众创业、万众创新”，配合国家“十三五”规划提出的“支持港澳中小微企业和青年人在内地发展创业”和“支持内地与港澳开展创新及科技合作”，由香港中国商会牵头，经纬集团发起并联合多家香港和海内外华侨华人相关商协会成立“紫荆谷发展中心”，得到了香港各界和国家有关部门的大力支持以及包括上海交通大学在内的国家11所顶尖高等院校的全方位合作。由经纬集团捐资，在“紫荆谷发展中心”的统筹下与国家11所著名高等院校合作，依托高校各自的学科优势，在11所高校设立“紫荆谷创新创业发展辅导中心”，为港澳台青年、海外华人华侨青年，包括内地的部分“创二代”提供一个学习、交流、合作的平台；邀请专家学者和企业家包括政府官员，对他们进行针对性的免费辅导。为深入推动“大众创业、万众创新”，配合国家“十三五”规划提出的“支持港澳中小微企业和青年人在内地发展创业”和“支持内地与港澳开展创新及科技合作”，由香港中国商会牵头，经纬集团发起并联合多家香港和海内外华侨华人相关商协会成立“紫荆谷发展中心”，得到了香港各界和国家有关部门的大力支持以及包括上海交通大学在内的国家11所顶尖高等院校的全方位合作。由经纬集团捐资，在“紫荆谷发展中心”的统筹下与国家11所著名高等院校合作，依托高校各自的学科优势，在11所高校设立“紫荆谷创新创业发展辅导中心”，为港澳台青年、海外华人华侨青年，包括内地的部分“创二代”提供一个学习、交流、合作的平台；邀请专家学者和企业家包括政府官员，对他们进行针对性的免费辅导。为深入推动“大众创业、万众创新”，配合国家“十三五”规划提出的“支持港澳中小微企业和青年人在内地发展创业”和“支持内地与港澳开展创新及科技合作”，由香港中国商会牵头，经纬集团发起并联合多家香港和海内外华侨华人相关商协会成立“紫荆谷发展中心”，得到了香港各界和国家有关部门的大力支持以及包括上海交通大学在内的国家11所顶尖高等院校的全方位合作。由经纬集团捐资，在“紫荆谷发展中心”的统筹下与国家11所著名高等院校合作，依托高校各自的学科优势，在11所高校设立“紫荆谷创新创业发展辅导中心”，为港澳台青年、海外华人华侨青年，包括内地的部分“创二代”提供一个学习、交流、合作的平台；邀请专家学者和企业家包括政府官员，对他们进行针对性的免费辅导。为深入推动“大众创业、万众创新”，配合国家“十三五”规划提出的“支持港澳中小微企业和青年人在内地发展创业”和“支持内地与港澳开展创新及科技合作”，由香港中国商会牵头，经纬集团发起并联合多家香港和海内外华侨华人相关商协会成立“紫荆谷发展中心”，得到了香港各界和国家有关部门的大力支持以及包括上海交通大学在内的国家11所顶尖高等院校的全方位合作。由经纬集团捐资，在“紫荆谷发展中心”的统筹下与国家11所著名高等院校合作，依托高校各自的学科优势，在11所高校设立“紫荆谷创新创业发展辅导中心”，为港澳台青年、海外华人华侨青年，包括内地的部分“创二代”提供一个学习、交流、合作的平台；邀请专家学者和企业家包括政府官员，对他们进行针对性的免费辅导。为深入推动“大众创业、万众创新”，配合国家“十三五”规划提出的“支持港澳中小微企业和青年人在内地发展创业”和“支持内地与港澳开展创新及科技合作”，由香港中国商会牵头，经纬集团发起并联合多家香港和海内外华侨华人相关商协会成立“紫荆谷发展中心”，得到了香港各界和国家有关部门的大力支持以及包括上海交通大学在内的国家11所顶尖高等院校的全方位合作。由经纬集团捐资，在“紫荆谷发展中心”的统筹下与国家11所著名高等院校合作，依托高校各自的学科优势，在11所高校设立“紫荆谷创新创业发展辅导中心”，为港澳台青年、海外华人华侨青年，包括内地的部分“创二代”提供一个学习、交流、合作的平台；邀请专家学者和企业家包括政府官员，对他们进行针对性的免费辅导。为深入推动“大众创业、万众创新”，配合国家“十三五”规划提出的“支持港澳中小微企业和青年人在内地发展创业”和“支持内地与港澳开展创新及科技合作”，由香港中国商会牵头，经纬集团发起并联合多家香港和海内外华侨华人相关商协会成立“紫荆谷发展中心”，得到了香港各界和国家有关部门的大力支持以及包括上海交通大学在内的国家11所顶尖高等院校的全方位合作。由经纬集团捐资，在“紫荆谷发展中心”的统筹下与国家11所著名高等院校合作，依托高校各自的学科优势，在11所高校设立“紫荆谷创新创业发展辅导中心”，为港澳台青年、海外华人华侨青年，包括内地的部分“创二代”提供一个学习、交流、合作的平台；邀请专家学者和企业家包括政府官员，对他们进行针对性的免费辅导。为深入推动“大众创业、万众创新”，配合国家“十三五”规划提出的“支持港澳中小微企业和青年人在内地发展创业”和“支持内地与港澳开展创新及科技合作”，由香港中国商会牵头，经纬集团发起并联合多家香港和海内外华侨华人相关商协会成立“紫荆谷发展中心”，得到了香港各界和国家有关部门的大力支持以及包括上海交通大学在内的国家11所顶尖高等院校的全方位合作。由经纬集团捐资，在“紫荆谷发展中心”的统筹下与国家11所著名高等院校合作，依托高校各自的学科优势，在11所高校设立“紫荆谷创新创业发展辅导中心”，为港澳台青年、海外华人华侨青年，包括内地的部分“创二代”提供一个学习、交流、合作的平台；邀请专家学者和企业家包括政府官员，对他们进行针对性的免费辅导。",

  },
  {
    id: 2,
    pic: 'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    title: "“红歌唱响东华”-第5届唱红歌比赛",
    time: "2017年5月1日",
    already: 24,
    status: false,
  },
  {
    id: 3,
    pic: 'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    title: "“红歌唱响东华”-第5届唱红歌比赛",
    time: "2017年5月1日",
    already: 24,
    status: false,
  },
  {
    id: 4,
    pic: 'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    title: "“红歌唱响东华”-第5届唱红歌比赛",
    time: "2017年5月1日",
    already: 24,
    status: false,
  },
]

const MODAL_TEXT = {
  modalTitle: '加载完成了喽😀！开始签到吧！',
  modalBtn: '确认签到',
  progressText: '努力签到中....',
};

class ActivityItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
      modalVisibile: false,
    }

    this.changeStatus = this.changeStatus.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  changeStatus() {
    this.setState({ 
      status: true,
      modalVisibile: false,
    });
  }

  showModal() {
    this.setState({ modalVisibile: true });
  }

  render() {
    const renderStatus = (
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['#FF0467', '#FC7437']}
        style={styles.gradient}
      >
        <Text style={styles.gradientText}>
          {
            !this.state.status 
            ? "签到"
            : "已签到"
          }
        </Text>
      </LinearGradient>
    );
    return (
      <TouchableOpacity style={styles.containerItem} onPress={() => this.props.navigation.navigate("TabOneScreenTwo", { data: this.props, title: '校园活动' })}>
        <ModalActivity changeStatus={this.changeStatus} modalVisibile={this.state.modalVisibile} {...MODAL_TEXT} />
        <Image source={{ uri: this.props.pic }} style={styles.pic} />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
          style={styles.picBox}
         />
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.statusBox}>
          <Text style={styles.time}>{this.props.time}</Text>
          <Text style={styles.already}>已有{this.props.already}人签到</Text>
        </View>
        <View style={styles.btnBox}>
          {
            !this.state.status 
            ? (
              <TouchableOpacity onPress={this.showModal}>
                {renderStatus}
              </TouchableOpacity>
            )
            : renderStatus
          }
        </View>
      </TouchableOpacity>
    )
  }
}

const ActivityBox = ({ navigation }) => {
  let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

  let dataSource = ds.cloneWithRows(STATUS_ITEMS);
  return (
    <View style={styles.container}>
      <ListView
        style={styles.listView}
        dataSource={dataSource}
        showsVerticalScrollIndicator={false}
        renderRow={(rowData) => {
          return <ActivityItem {...rowData} key={rowData.id} navigation={navigation} />
        }}
      />
  </View>
  )
}

ActivityBox.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        headerText="活动签到"
        logoLeft={require('../TabOne/img/back.png')}
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
    alignItems: 'center',
  },
  containerItem: {
    paddingBottom: 30.25,
    marginBottom: 9.75,
    marginTop: 22.5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C1C1C1',
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 20,
    color: '#000000',
    marginTop: 17,
    marginBottom: 6,
  },
  time: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 14,
    color: 'rgba(152,152,152,0.80)',
    marginLeft: 2,
  },
  already: {
    fontFamily: 'PingFangSC-Thin',
    fontSize: 14,
    color: '#000000',
    marginRight: 5,
  },
  statusBox: {
    flexDirection: 'row',
    marginBottom: 17,
    justifyContent: 'space-between',
  },
  pic: {
    width: 313,
    height: 176,
    borderRadius: 5,
  },
  detailBox: {
    width: 150,
    height: 42,
    backgroundColor: '#4990E2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 2,
  },
  detail: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 20,
    color: '#FFFFFF',
  },
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gradient: {
    width: 313,
    height: 42,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  gradientText: {
    backgroundColor: 'transparent',
    fontFamily: 'PingFangSC-Regular',
    fontSize: 20,
    color: '#FFFFFF',
  },
  picBox: {
    width: 313,
    height: 176,
    borderRadius: 5,
    position: 'absolute',
  }
})

export default ActivityBox;