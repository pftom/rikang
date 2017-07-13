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


const handleNearbyDoctor = (data) => {
  let dataSource = [];

  data.map((item) => {
    dataSource.push({
      key: item.get('id'),
      avatar: item.get('avatar'),
      name: item.get('name'),
      categoryImg: require('../img/eyeDep.png'),
      categoryTitle: item.get('department'),
      doctorAge: item.get('years'),
    });
  });

  return dataSource;
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
  handleNearbyDoctor,
  handleHealthPost,
}