const headerTitleData = [
  {
    img: require('../img/question.png'),
    title: '我要提问',
  },
  {
    img: require('../img/nearbyDoctor.png'),
    title: '附近医生',
  },
  {
    img: require('../img/nearbyHospital.png'),
    title: '附近医院',
  },
];


const nearbyDoctor = [];
for (let i = 0; i < 10; i++) {
  const nearbyDoctorItem = {
    avatar: require('../img/testAvatar.png'),
    name: '谢尔盖',
    categoryImg: require('../img/eyeDep.png'),
    categoryTitle: '眼科',
    doctorAge: 20,
    key: i,
};
  nearbyDoctor.push(nearbyDoctorItem);
}



//handle 
const handleTime = (time) => {
  let afterTime = '';
  afterTime += time.slice(0, 10);
  afterTime += ' ';
  afterTime += time.slice(11, 19);
  return afterTime;
}

//handle immutable data to plain object
const handleHealthPost = (data) => {
  let dataSource = [];
 
  data.map((item) => {
    dataSource.push({
      key: item.get('id'),
      img: item.get('photo'),
      title: item.get('title'),
      time: handleTime(item.get('created')),
    });
  })

  return dataSource;
}

export {
  headerTitleData,
  nearbyDoctor,
  handleHealthPost,
}