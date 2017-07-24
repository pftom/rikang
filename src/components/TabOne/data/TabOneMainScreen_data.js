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


const sortMap = {
  '默认排序': 'default',
  '帮助患者最多': 'patient_num',
  '价格由高到低': 'consult_price_high_to_low',
  '价格由低到高': 'consult_price_low_to_high',
  '从医时间最长': 'years',
};

const getItem = (item, key) => item.get(key);

const handleNearby = (data, horizontal, calCount, dep, sort) => {
  let dataSource = [];

  let sortedData = [];
  let kind = 'default';

  if (sort) {
    kind = sortMap[sort];
  }
  switch(kind) {
    case 'default':
      sortedData = data;
      break;
      
    case 'consult_price_high_to_low':
    case 'years':
    case 'patient_num':
      if (kind === 'consult_price_high_to_low') {
        kind = 'consult_price';
      }

      sortedData = data.sort((item1, item2) => {
        if (item1.get(kind) < item2.get(kind)) { return 1; }
        if (item1.get(kind) > item2.get(kind)) { return -1; }
        if (item1.get(kind) === item2.get(kind)) { return 0; }
      });
      break;

    case 'consult_price_low_to_high':
      if (kind === 'consult_price_low_to_high') {
        kind = 'consult_price';
      }

      sortedData = data.sort((item1, item2) => {
        if (item1.get(kind) < item2.get(kind)) { return -1; }
        if (item1.get(kind) > item2.get(kind)) { return 1; }
        if (item1.get(kind) === item2.get(kind)) { return 0; }
      });

  }

  sortedData.map((item) => {
    if ( dep && dep !== item.get('department')) {
      return;
    }
    item = item.toJS();
    const { id } = item;

    dataSource.push({
      ...item,
      key: id,
    });
  });

  if (dataSource.length > 10 && horizontal) {
    if (calCount) {
      return {
        data: dataSource.slice(0, 10),
        count: dataSource.length,
      }
    }
    return dataSource.slice(0, 10);
  }

  if (calCount) {
    return {
      data: dataSource,
      count: dataSource.length,
    }
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
const handleHealthPost = (data, calCount) => {
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

  if (calCount) {
    return {
      data: dataSource,
      count: dataSource.length,
    }
  }

  return dataSource;
}

export {
  headerTitleData,
  handleNearby,
  handleHealthPost,
}