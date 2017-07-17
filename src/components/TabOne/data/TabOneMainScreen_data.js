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


const getItem = (item, key) => item.get(key);

const handleNearby = (data, horizontal, hospitalId) => {
  let dataSource = [];

  data.map((item) => {
    item = item.toJS();
    const { id } = item;
    let img = {};
    if (!hospitalId) {
      img.categoryImg = require('../img/eyeDep.png');
    }

    dataSource.push({
      ...item,
      ...img,
      key: id,
    });
  });

  if (dataSource.length > 10 && horizontal) {
    return dataSource.slice(0, 10);
  }

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
      id: item.get('id'),
      photo: item.get('photo'),
      title: item.get('title'),
      time: handleTime(item.get('created')),
    });
  })

  return dataSource;
}

export {
  headerTitleData,
  handleNearby,
  handleHealthPost,
}